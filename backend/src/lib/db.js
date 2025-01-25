import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://yadrajveer57:xCVfnXjalA1FAzWW@cluster0.4vifg.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MongoDB connected: ${conn.connection.host}`);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

