import { Request, Response } from "express";
import User from "../models/user";
import { createToken } from "../utils/jwt";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    user = new User({ name, email, password });
    await user.save();

    const token = createToken(user);
    res.status(201).json({ user, token });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = createToken(user);
    res.status(200).json({ user, token });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
