import { configDotenv } from "dotenv";
import cors from "cors";
import express from "express";
import connectdb from "./database/db.js";
import cookieParser from "cookie-parser";
import authRoutes from './routes/authRoutes.js'
configDotenv();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth/',authRoutes)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectdb();
});
