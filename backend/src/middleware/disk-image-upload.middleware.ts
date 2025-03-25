import multer from "multer";
import path from "path";

// Define storage settings correctly
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname.split(".")[0] +
        "-" +
        Date.now() +
        path.extname(file.originalname),
    );
  },
});

export const multerImageUpload = multer({ storage }).array("image", 10);
