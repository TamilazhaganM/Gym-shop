import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

let database;

async function getDatabase() {
  if (!database) {
    try {
      // Replace <username>, <password>, and <cluster-url> with your MongoDB Atlas credentials
      const client = await MongoClient.connect("mongodb+srv://Tamil:Tamizhsam30@cluster0.xx8hc.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      database = client.db("customers"); // Replace "customers" with your database name if different
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      throw error;
    }
  }
  return database;
}

export default getDatabase;
