import express from "express";
import dbo from "./Database/db.js";
import Razorpay from 'razorpay'
import cors from "cors"
import dotenv from "dotenv"


const app = express();
dotenv.config()
const PORT = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors({
  origin: ['https://musclehousee.netlify.app','http://localhost:3000','https://musclehouse.netlify.app/'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // If you need to include cookies or authorization headers
}));
app.options('*', cors());


app.get('/', (req, res) => {
  res.send('Hello, worldd!');
});
app.post("/login",async(req,res)=>{
  const {email,password}=req.body
  try {
    let database = await dbo();
    const collection = database.collection("users");
    const user=await collection.findOne({email: email})
      if(user){
        if(user.password===password){ 
          res.status(200).json({status:"success",message:"Login successfully"})
        } else(
          res.status(400).json({status:"error",message:"The password is incorrect"})
        )
      }else{
        res.status(500).json({status:"error",message:"email doesn't exists"})
      }

  } catch (error) {
    console.error("this is"+error)
  }
})

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Basic input validation
  if (!name || !email || !password) {
    return res.status(400).send({ message: "All fields are required." });
  }

  try {
    let database = await dbo();
    const collection = database.collection("users");

    const customer = {
      name,
      email,
      password,
    };

    await collection.insertOne(customer);
    res.status(201).send({ message: "Customer registered successfully!" });
  } catch (error) {
    console.error("Error registering customer:", error);
    res.status(500).send({ message: "Internal server error while registering the user." });
  }
});
app.post('/member',async(req,res)=>{
  const {name,mail,place,mobile}=req.body

  if (!name || !mail || !place || !mobile) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    let database = await dbo()
    const collection=database.collection("members")
    const customer ={name,mail,place,mobile}
    await collection.insertOne(customer)
    res.status(201).send({ message: "Member Added successfully!" });
  } catch (error) {
    console.error("Error in member adding:", error);
    res.status(500).send({ message: "Internal server error." });
  }
})
app.get('/latest-member',async(req,res)=>{
  try{
  let database= await dbo()
  const orderDetails=database.collection('members')
  const latestMember=await orderDetails.findOne({},{sort:{_id:-1}})
  if (latestMember) {
    res.status(200).json(latestMember);
  } else {
    res.status(404).json({ message: "No records found." });
  }
} catch (error) {
  console.error("Error fetching the latest member:", error);
  res.status(500).json({ message: "Internal server error" });
}
});
app.get('/test-db', async (req, res) => {
  try {
    let database = await dbo(); // Ensure `dbo()` connects to your database correctly
    const collections = await database.collections();
    const collectionNames = collections.map(collection => collection.collectionName);
    
    res.status(200).json({
      message: 'Database is working',
      collections: collectionNames,
    });
  } catch (error) {
    console.error('Database test failed:', error);
    res.status(500).json({ message: 'Failed to access database' });
  }
});

// Razorpay api
app.post('/order', async (req, res) => {
  try {
    const { amount, currency, receipt } = req.body;

    // Validate the input
    if (!amount || !currency || !receipt) {
      return res.status(400).json({ message: "Missing required fields: amount, currency, receipt" });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount, // Amount in smallest currency unit
      currency,
      receipt,
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(502).json({ message: "Failed to create order" });
    }

    res.status(200).json(order);
  } catch (err) {
    console.error("Error creating Razorpay order:", err.message);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
});




app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
