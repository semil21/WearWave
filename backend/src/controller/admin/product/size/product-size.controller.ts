import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import ProductSize from "../../../../schema/admin/product/size/product-size.schema";

export const saveNewProductSize = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const saveProductSize = await ProductSize.create(req.body);

      if (saveProductSize) {
        res.status(200).send({ response: saveProductSize });
      } else {
        res.status(200).send({ response: "Failed to save new product size" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to save new product size" });
    }
  },
);

export const getAllSizesOfProduct = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;

      const fetchAllSizes = await ProductSize.find({
        product: productId,
      }).lean();

      if (fetchAllSizes) {
        res.status(200).send({ response: fetchAllSizes });
      } else {
        res
          .status(400)
          .send({ response: "Failed to fetch all sizes of a product" });
      }
    } catch (error) {
      res.status(500).send({
        response: "Server error, failed to get all sized of a product",
      });
    }
  },
);
