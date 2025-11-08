import { Router } from "express";
import authRoutes from "./auth";

const indexRoutes = Router();

indexRoutes.use("/auth", authRoutes);

export default indexRoutes;
