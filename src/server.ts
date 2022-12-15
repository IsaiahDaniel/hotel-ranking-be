import express from "express";
import connectDB from "./config/connect";
import dotenv from "dotenv";

import hotelsRoute from "./routes/hotels";

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

// connect to database
connectDB();

// Routes
app.get("/", (req, res) => {
  res.status(200).json("API running");
});

app.use("/api/v1/hotels", hotelsRoute);

app.listen(5000, () => {
  console.log(`Server is Listening on 3000`);
});
