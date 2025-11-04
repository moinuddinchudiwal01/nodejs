import mongoose from "mongoose";
import { Config } from "./config";

export const dbConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(Config.DB_URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", (error as Error).message);
    process.exit(1);
  }
};
