import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import path from "path";
import UserRouter from "./Routes/UserRoutes.js";
import connectDB from "./Config/db.js";

const app = express();
// dotenv.config(({ path: path.resolve( '../.env') }));
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDB();
app.get("/", function (req, res) {
  res.json({
    name: "Vaishnav",
  });
});

app.use("/api", UserRouter);


// DB CONNECTION
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
