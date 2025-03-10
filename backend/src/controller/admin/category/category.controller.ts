import expressAsyncHandler from "express-async-handler";
import Category from "../../../schema/admin/category/category.schema";
import { Request, Response } from "express";

export const createNewCategory = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { name } = req.body;

      const checkIfCategoryExists = await Category.find({ name: name });

      if (checkIfCategoryExists.length > 0) {
        res.status(200).send({ response: "Category Already exists." });
      } else {
        const saveCategoryRecord = await Category.create(req.body);

        if (saveCategoryRecord) {
          res.status(200).send({ response: saveCategoryRecord });
        } else {
          res.status(400).send({ response: "Failed to save new record" });
        }
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to save new category" });
    }
  },
);

export const getAllCategories = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const fetchAllCategoriesRecord = await Category.find().lean();

      if (fetchAllCategoriesRecord) {
        res.status(200).send({ response: fetchAllCategoriesRecord });
      } else {
        res.status(400).send({ response: "Failed to fetch all categories" });
        0;
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to fetch all categories" });
    }
  },
);

export const updateCategory = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { categoryId } = req.params;

      const updateCategoryRecord = await Category.findByIdAndUpdate(
        { _id: categoryId },
        req.body,
        { new: true },
      );

      if (updateCategoryRecord) {
        res.status(200).send({ response: updateCategoryRecord });
      } else {
        res.status(400).send({ response: "Failed to updated category record" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to update catgory record" });
    }
  },
);

export const updateCategoryStatus = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { categoryId } = req.params;
      const { status } = req.body;

      const updatedStatus = status === true ? false : true;

      const updateCategoryRecordStatus = await Category.findByIdAndUpdate(
        { _id: categoryId },
        { status: updatedStatus },
        { new: true },
      );

      if (updateCategoryRecordStatus) {
        res.status(200).send({ response: updateCategoryRecordStatus?.status });
      } else {
        res.status(400).send({ response: "Failed to update category status" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to update category status" });
    }
  },
);
