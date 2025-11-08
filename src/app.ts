import express from "express";
import { dbConnection } from "./config/db";
import { Config } from "./config/config";
import cors from "cors";
import indexRoutes from "./routes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));

// Routes
app.use("/api/v1", indexRoutes);

// Connect to Database and Start Server
dbConnection()
  .then(() => {
    app.listen(Config.PORT, () => {
      console.log(`Server running at http://localhost:${Config.PORT}`);
    });
  })
  .catch((error) => {
    console.error(
      "Failed to connect DB or start server:",
      (error as Error).message
    );
    process.exit(1);
  });
