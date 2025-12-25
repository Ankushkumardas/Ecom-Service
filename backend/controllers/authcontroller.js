import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// register
export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "User with this email already exists",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    const payload = { user: { id: user._id, role: user.role } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          throw Error("jwt token error");
        }
        return res.status(201).json({
          message: "User registered successfully",
          success: true,
          user: {
            id: user._id,
            email: user.email,
            username: user.username,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
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
      { id: user._id, role: user.role, email: user.email,username:user.username },
      process.env.JWT_SECRET,
      { expiresIn: "60m" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      token,
      user: {
        email: user.email,
        id: user._id,
        role: user.role,
        name: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in login internal server error",
      success: false,
    });
  }
};

//user profile protected routed and private
export const profile = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized: No user information found", success: false });
  }
  console.log(req.user);
  res.status(200).json({ message: "user profile information", success: true, user: req.user });
};
// logout
export const logout = async (res) => {
  try {
    return res
      .clearCookie("token")
      .json({ message: "User logged out successfully", success: true });
  } catch (error) {
    return res.status(500).json({ message: "Internel server error", error });
  }
};
