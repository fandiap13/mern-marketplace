import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log(err));

const app = express();

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
