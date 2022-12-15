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
exports.createHotel = exports.getHotel = exports.getHotels = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Hotel_1 = __importDefault(require("../models/Hotel"));
exports.getHotels = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const hotels = yield Hotel_1.default.find();
    res.json({ success: true, data: hotels });
}));
exports.getHotel = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const hotels = yield Hotel_1.default.findOne({ _id: req.params.id });
    res.json({ success: true, data: hotels });
}));
exports.createHotel = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req.body", req.body);
    const hotel = yield Hotel_1.default.create({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        image: req.body.image
    });
    res.status(201).json({ success: true, data: hotel });
}));
//# sourceMappingURL=hotelsController.js.map