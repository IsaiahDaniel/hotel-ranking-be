import express from "express";
const router = express.Router();

import multer from "multer";

import { getHotels, createHotel } from "../controllers/hotelsController";

const MIME_TYPE = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let error;

    const isValid = MIME_TYPE[file.mimetype];

    if (!isValid) {
      error = new Error("File type not allowed");
    } else {
      error = null;
    }

    cb(error, "src/public/uploads");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const ext = MIME_TYPE[file.mimetype];
    cb(null, name + Date.now() + "." + ext);
  },
});

const upload = multer({ storage });

router.get("/", getHotels);
router.post("/", upload.single("image"), createHotel);

export default router;
