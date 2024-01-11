import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error !";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
