"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const User_1 = __importDefault(require("../models/User"));
const ErrorResponse_1 = __importDefault(require("../utils/ErrorResponse"));
// @route   /api/v1/users/register
// @desc    Register a user
// @access  public
exports.registerUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, username, location, phone } = req.body;
    const user = yield User_1.default.findOne({ email });
    if (!email || !password || !username) {
        next(new ErrorResponse_1.default("All fields are required", 400));
    }
    if (user) {
        next(new ErrorResponse_1.default(`Please try Another Email`, 400));
    }
    const createdUser = yield User_1.default.create({ email, password, username, location, phone });
    const token = createdUser.sendToken(createdUser._id);
    res.status(201).json({ success: true, token, data: createdUser });
}));
// @route   /api/v1/users/login
// @desc    Register a user
// @access  public
exports.loginUser = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.default.findOne({ email });
    if (!email || !password) {
        return next(new ErrorResponse_1.default("Please fill in all fields", 400));
    }
    if (!user) {
        return next(new ErrorResponse_1.default(`Invalid Details`, 404));
    }
    const isMatch = yield user.comparePassword(password);
    if (!isMatch) {
        return next(new ErrorResponse_1.default(`Invalid Details`, 404));
    }
    const token = user.sendToken(user._id);
    res.status(200).json({
        success: true,
        token,
        data: user
    });
}));
//# sourceMappingURL=authController.js.map