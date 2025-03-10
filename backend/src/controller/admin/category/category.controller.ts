import Category from "../../../schema/admin/category/category.schema";
import { Request, Response } from "express";

export const createNewCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const checkIfCategoryExists = await Category.find({ name: name });

    if (checkIfCategoryExists.length > 0) {
      return res.status(200).send({ response: "Category Already exists." });
    }

    const saveCategoryRecord = await Category.create(req.body);

    if (saveCategoryRecord) {
      res.status(200).send({ response: saveCategoryRecord });
    } else {
      res.status(400).send({ response: "Failed to save new record" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ response: "Server error, failed to save new category" });
  }
};
