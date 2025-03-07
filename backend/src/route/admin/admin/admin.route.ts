import express from "express";
import {
  adminLogin,
  createNewAdmin,
} from "../../../controller/admin/admin/admin.controller";

const adminRouter = express.Router();

adminRouter.post("/create", createNewAdmin);
adminRouter.post("/login", adminLogin);

export default adminRouter;
