import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
// register
export const register = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    if (
      !email ||
      !username ||
      !password ||
      !email.trim() ||
      !username.trim() ||
      !password.trim()
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
    const hashpass = await bcrypt.hash(password, 12);
    const newuser = await User.create({ username, email, password: hashpass });
    await newuser.save();
    return res
      .status(200)
      .json({ message: "User is registered successfully", success: true });
  } catch (error) {
    res.status(500).json({
      message: "Error in register internel server error",
      success: false,
    });
  }
};
// login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (error) {
    res.status(500).json({
      message: "Error in login internel server error",
      success: false,
    });
  }
};
