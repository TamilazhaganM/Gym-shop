
import express from "express";
import dbo from "./Database/db.js";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, world!');
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
    res.status(500).send({ message: "Internal server error." });
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
app.get('/order',async(req,res)=>{
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
app.get("/check-db", async (req, res) => {
  try {
    let database = await dbo();
    const collections = await database.collections();
    res.status(200).json(collections);
  } catch (error) {
    console.error("Database check failed:", error);
    res.status(500).json({ message: "Failed to access database" });
  }
});


app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
