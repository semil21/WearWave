import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = async () => {
  try {
    const databaseConnection = await mongoose.connect(
      process.env.MONGODB_URL ?? "",
    );

    if (databaseConnection) {
      console.log("Database connected successfully");
    } else {
      console.log("failed to connect with database");
    }
  } catch (error) {
    throw error;
  }
};

export default connectDatabase;
