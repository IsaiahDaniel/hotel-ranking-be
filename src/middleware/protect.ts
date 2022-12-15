import { NextFunction } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/ErrorResponse.js";

const protect = asyncHandler((req: any, res: any, next: NextFunction): any => {
    let token: any;

    try {
        if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            next();
        }
    } catch (error) {
        return next(new ErrorResponse("Invalid Token, unauthorized", 401));
    }

    if(!token){
        return next(new ErrorResponse("No Token, unauthorized", 401));
    }
    
})

export default protect;