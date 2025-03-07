import connectDatabase from "./database/database";
import Express from "express";
import dotenv from "dotenv";

import adminRouter from "./route/admin/admin/admin.route";

dotenv.config();

const app = Express();
app.use(Express.json());

app.use("/admin", adminRouter);

app.listen(process.env.MONGODB_PORT, () =>
  console.log(`Server running on port ${process.env.MONGODB_PORT}`),
);

connectDatabase();
