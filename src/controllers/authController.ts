import asyncHandler from "express-async-handler";
import User from "../models/User";
import ErrorResponse from "../utils/ErrorResponse";

// @route   /api/v1/users/register
// @desc    Register a user
// @access  public

export const registerUser = asyncHandler(async (req, res, next) => {
    const { email, password, username, location, phone } = req.body;

    const user = await User.findOne({ email });

    if(!email || !password || !username){
        next(new ErrorResponse("All fields are required", 400));
    }

    if(user){
        next(new ErrorResponse(`Please try Another Email`, 400));
    }

    const createdUser = await User.create({ email, password, username, location, phone });

    const token = createdUser.sendToken(createdUser._id);

    res.status(201).json({ success: true, token, data: createdUser });

});


// @route   /api/v1/users/login
// @desc    Register a user
// @access  public

export const loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!email || !password){
        return next(new ErrorResponse("Please fill in all fields", 400));
    }

    if(!user){
        return next(new ErrorResponse(`Invalid Details`, 404));
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return next(new ErrorResponse(`Invalid Details`, 404));
    }

    const token = user.sendToken(user._id);

    res.status(200).json({
        success: true,
        token,
        data: user
    })

});

