import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: number;
  DB_URL: string;
  NODE_ENV: string;
}

const config: Config = {
  PORT: Number(process.env.PORT) || 4000,
  DB_URL: process.env.DB_URL || "",
  NODE_ENV: process.env.NODE_ENV || "development",
};

export default config;
