import { Schema, model } from "mongoose";

const hotelSchema = new Schema({
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

const Hotel = model("hotel", hotelSchema);

export default Hotel;