import jwt from "jsonwebtoken";
import { IUser } from "../models/user";
import { Config } from "../config/config";

export const createToken = (user: IUser) => {
  return jwt.sign({ id: user._id, email: user.email }, Config.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, Config.JWT_SECRET);
};
