import connectDatabase from "./database/database";
import Express from "express";
import dotenv from "dotenv";

import adminRouter from "./route/admin/admin/admin.route";
import adminCategoryRouter from "./route/admin/category/category.route";

dotenv.config();

const app = Express();
app.use(Express.json());

// admin routes
app.use("/admin", adminRouter);
app.use("/admin/category", adminCategoryRouter);

app.listen(process.env.MONGODB_PORT, () =>
  console.log(`Server running on port ${process.env.MONGODB_PORT}`),
);

connectDatabase();
