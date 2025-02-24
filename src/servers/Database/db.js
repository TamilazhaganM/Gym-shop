import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

let database;

async function getDatabase() {
  if (!database) {
    try {
      // Replace <username>, <password>, and <cluster-url> with your MongoDB Atlas credentials
      const client = await MongoClient.connect("mongodb+srv://Tamil:Tamizhsam30@cluster0.xx8hc.mongodb.net/");
<<<<<<< HEAD
      
=======
      await client.connect()
>>>>>>> 7bdc170 (update and delete operation)
      // Connect to the "customers" database (or your preferred database name)
      database = client.db("customers");
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      throw error;
    }
  }
  return database;
}

export default getDatabase;
