import express from "express";
import dbo from "./Database/db.js";
import Razorpay from 'razorpay';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Setup
app.use(cors({
  origin: ['https://musclehousee.netlify.app', 'http://localhost:3000', 'https://musclehouse.netlify.app'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));

console.log("🚀 Backend server is running...");


// Root Route
app.get('/', (req, res) => {
  res.send('Hello, world! Backend is live.');
  console.log("Root route accessed");
});

// Login Route
app.post("/login", async (req, res) => {
  console.error("🔥 Login route hit");

  const { email, password } = req.body;
  console.log("Received email:", email);
  console.log("Received password:", password);

  if (!email || !password) {
    console.log("⚠️ Missing email or password");
    return res.status(400).json({ status: "error", message: "Email and password are required." });
  }

  try {
    console.log("🔍 Connecting to database...");
    let database = await dbo();
    const collection = database.collection("users");

    console.log("🔍 Searching for user:", email);
    const user = await collection.findOne({ email });

    if (!user) {
      console.log("❌ Email not found");
      return res.status(404).json({ status: "error", message: "Email doesn't exist" });
    }

    console.log("✅ User found:", user);

    if (user.password === password) {
      console.log("✅ Password matched");
      res.status(200).json({ status: "success", message: "Login successful", user });
    } else {
      console.log("❌ Incorrect password");
      res.status(400).json({ status: "error", message: "Incorrect password" });
    }
  } catch (error) {
    console.error("🔥 Login error:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// Register Route
app.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    let database = await dbo();
    const collection = database.collection("Registers");

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const newUser = { name, email, password, role };
    await collection.insertOne(newUser);
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Member Route
app.post('/member', async (req, res) => {
  console.log("member route is hit")
  const { name, mail, place, mobile, membership } = req.body;
  if (!name || !mail || !place || !mobile || !membership) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    let database = await dbo();
    const collection = database.collection("members");
    await collection.insertOne({ name, mail, place, mobile, membership });
    res.status(201).json({ message: "Member added successfully!" });
  } catch (error) {
    console.error("Member addition error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Get Latest Member
app.get('/latest-member', async (req, res) => {
  try {
    let database = await dbo();
    const orderDetails = database.collection('members');
    const latestMember = await orderDetails.findOne({}, { sort: { _id: -1 } });
    if (latestMember) {
      res.status(200).json(latestMember);
    } else {
      res.status(404).json({ message: "No records found." });
    }
  } catch (error) {
    console.error("Latest member fetch error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Database Test Route
app.get('/test-db', async (req, res) => {
  try {
    let database = await dbo();
    const collections = await database.collections();
    const collectionNames = collections.map(col => col.collectionName);
    res.status(200).json({ message: "Database is working", collections: collectionNames });
  } catch (error) {
    console.error("Database test error:", error);
    res.status(500).json({ message: "Failed to access database" });
  }
});

// Razorpay Order Route
app.post('/order', async (req, res) => {
  try {
    const { amount, currency, receipt } = req.body;
    if (!amount || !currency || !receipt) {
      return res.status(400).json({ message: "Missing required fields: amount, currency, receipt" });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = { amount, currency, receipt };
    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(502).json({ message: "Failed to create order" });
    }

    res.status(200).json(order);
  } catch (err) {
    console.error("Razorpay order error:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
