import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: number;
  DB_URL: string;
  NODE_ENV: string;
  JWT_SECRET: string;
}

export const Config: Config = {
  PORT: Number(process.env.PORT),
  DB_URL: process.env.DB_URL || "",
  NODE_ENV: process.env.NODE_ENV || "development",
  JWT_SECRET: process.env.JWT_SECRET || "",
};
