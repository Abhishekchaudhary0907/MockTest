import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tesTservice from "./routers/index.js";

dotenv.config({});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use("/", tesTservice);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("app is running on PORT", PORT);
});
