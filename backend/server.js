import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";

import connectdb from "./database/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from './routes/productRoutes.js';

configDotenv();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
    ],
  })
);


app.use(cookieParser());
app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/products",productRoutes);

const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    connectdb();
    console.log(`🚀 Server running on port ${PORT}`);
  });

