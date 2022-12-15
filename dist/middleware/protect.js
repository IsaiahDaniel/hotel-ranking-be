"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ErrorResponse_js_1 = __importDefault(require("../utils/ErrorResponse.js"));
const protect = (0, express_async_handler_1.default)((req, res, next) => {
    let token;
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        }
    }
    catch (error) {
        return next(new ErrorResponse_js_1.default("Invalid Token, unauthorized", 401));
    }
    if (!token) {
        return next(new ErrorResponse_js_1.default("No Token, unauthorized", 401));
    }
});
exports.default = protect;
//# sourceMappingURL=protect.js.map