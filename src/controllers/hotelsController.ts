import asyncHandler from "express-async-handler"
import Hotel from "../models/Hotel";

export const getHotels = asyncHandler(async (req, res, next) => {
    const hotels = await Hotel.find();

    res.json({ success: true, data: hotels });
});

export const getHotel = asyncHandler(async (req, res, next) => {
    const hotels = await Hotel.findOne({ _id: req.params.id });

    res.json({ success: true, data: hotels });
});

export const createHotel = asyncHandler(async (req, res, next) => {

    console.log("req.body", req.body);

    const hotel = await Hotel.create({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        image: req.body.image
    })

    res.status(201).json({ success: true, data: hotel });

});
