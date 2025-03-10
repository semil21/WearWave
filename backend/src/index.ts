import connectDatabase from "./database/database";
import Express from "express";
import dotenv from "dotenv";

import adminRouter from "./route/admin/admin/admin.route";
import adminCategoryRouter from "./route/admin/category/category.route";
import adminProductRouter from "./route/admin/product/product/product.route";
import productSizeRouter from "./route/admin/product/size/product-size.route";

dotenv.config();

const app = Express();
app.use(Express.json());

// admin routes
app.use("/admin", adminRouter);
app.use("/admin/category", adminCategoryRouter);
app.use("/admin/product", adminProductRouter);
app.use("/admin/product-size", productSizeRouter);

app.listen(process.env.MONGODB_PORT, () =>
  console.log(`Server running on port ${process.env.MONGODB_PORT}`),
);

connectDatabase();
