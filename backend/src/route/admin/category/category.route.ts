import express from "express";
import {
  createNewCategory,
  getAllCategories,
  updateCategory,
} from "../../../controller/admin/category/category.controller";
import verifyToken from "../../../middleware/admin.middleware";

const adminCategoryRouter = express.Router();

adminCategoryRouter.get("/", verifyToken, getAllCategories);
adminCategoryRouter.post("/create", verifyToken, createNewCategory);
adminCategoryRouter.put("/update/:categoryId", verifyToken, updateCategory);

export default adminCategoryRouter;
