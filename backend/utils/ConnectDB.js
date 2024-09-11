import { mongoose } from "mongoose";
import "dotenv/config";

const uri = process.env.MONGO_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB with Mongoose");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

export default connectToDatabase;