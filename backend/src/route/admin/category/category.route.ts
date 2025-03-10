import express from "express";
import { createNewCategory } from "../../../controller/admin/category/category.controller";
import verifyToken from "../../../middleware/admin.middleware";

const adminCategoryRouter = express.Router();

adminCategoryRouter.post("/create", verifyToken, createNewCategory);

export default adminCategoryRouter;
