import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Image from "../../../../schema/admin/product/image/image.schema";
import mongoose from "mongoose";

export const saveNewImage = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const saveImageRecord = await Image.create(req.body);

      if (saveImageRecord) {
        res.status(200).send({ response: saveImageRecord });
      } else {
        res.status(400).send({ response: "Failed to save new image" });
      }
    } catch (error) {
      res
        .status(500)
        .send({ response: "Server error, failed to add new image" });
    }
  },
);

export const getAllImagesOfProduct = expressAsyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;

      const aggregationPipeline = [
        {
          $match: {
            product: new mongoose.Types.ObjectId(productId),
          },
        },
        {
          $sort: {
            precedence: 1 as 1,
          },
        },
      ];

      const fetchImages = await Image.aggregate(aggregationPipeline);

      if (fetchImages) {
        res.status(200).send({ response: fetchImages });
      } else {
        res
          .status(400)
          .send({ response: "Failed to fetch images of a product" });
      }
    } catch (error) {
      res.status(500).send({
        response: "Server error, failed to get all images of a product",
      });
    }
  },
);
