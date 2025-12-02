import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import e from "express";
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
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User with this email already exists",
        success: false,
      });
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
    if (!email || !password || !email.trim() || !password.trim()) {
      return res
        .status(400)
        .json({ message: "All credentials are required", success: false });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User with this email does not exist",
        success: false,
      });
    }
    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      return res
        .status(400)
        .json({ message: "User password is incorrect", success: false });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "60m" }
    );
    return res
      .cookie("token", token, { httpOnly: true, secure: false })
      .json({ message: "User logged in successfully", success: true, token, user:{
        email:user.email,
        id:user._id,
        role:user.role
      } });
  } catch (error) {
    res.status(500).json({
      message: "Error in login internal server error",
      success: false,
    });
  }
};
// logout
export const logout=async(req,res)=>{
  try {
    return res.clearCookie("token").json({message:"User logged out successfully",success:true})
  } catch (error) {
    return res.status(500).json({message:"Internel server error",error})
  }
}