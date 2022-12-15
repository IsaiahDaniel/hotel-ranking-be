"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const hotelsController_1 = require("../controllers/hotelsController");
const MIME_TYPE = {
    "image/png": "png",
    "image/jpg": "jpg",
    "image/jpeg": "jpeg",
};
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        let error;
        const isValid = MIME_TYPE[file.mimetype];
        if (!isValid) {
            error = new Error("File type not allowed");
        }
        else {
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
const upload = (0, multer_1.default)({ storage });
router.get("/", hotelsController_1.getHotels);
router.post("/", upload.single("image"), hotelsController_1.createHotel);
exports.default = router;
//# sourceMappingURL=hotels.js.map