import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri || typeof uri !== "string") {
      throw new Error(
        "MONGO_URI is not defined or not a string. Set it in your .env file."
      );
    }
    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting to Database:", error);
    throw error;
  }
};
export default connectdb;
