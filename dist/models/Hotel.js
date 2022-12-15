"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const hotelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        // required: [true, "Hotel name is required"],
    },
    address: {
        type: String,
        // required: [true, "Address is required"]
    },
    city: {
        type: String,
        // required: [true, "City is required"]
    },
    country: {
        type: String,
        // required: [true, "country is required"]
    },
    image: {
        type: String,
        // required: [true, "Hotel Image is required"]
    }
});
const Hotel = (0, mongoose_1.model)("hotel", hotelSchema);
exports.default = Hotel;
//# sourceMappingURL=Hotel.js.map