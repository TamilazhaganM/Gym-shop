import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;
import mongoose from "mongoose";

mongoose.set('debug', true);


let database;

async function getDatabase() {
  if (!database) {
    try {
      const client = await MongoClient.connect("mongodb://localhost:27017/", {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
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
