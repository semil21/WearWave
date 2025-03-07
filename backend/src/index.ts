import connectDatabase from "./database/database";
import Express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = Express();

app.listen(process.env.MONGODB_PORT, () =>
  console.log(`Server running on port ${process.env.MONGODB_PORT}`),
);

connectDatabase();
