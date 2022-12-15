"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./config/connect"));
const dotenv_1 = __importDefault(require("dotenv"));
const hotels_1 = __importDefault(require("./routes/hotels"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static("public"));
// connect to database
(0, connect_1.default)();
// Routes
app.get("/", (req, res) => {
    res.status(200).json("API running");
});
app.use("/api/v1/hotels", hotels_1.default);
app.listen(5000, () => {
    console.log(`Server is Listening on 3000`);
});
//# sourceMappingURL=server.js.map