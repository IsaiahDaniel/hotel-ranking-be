import { NextFunction } from "express";

const errorHandler = (err: any, req: Request, res: any, next: NextFunction) => {
    console.log("err", err);

    res.status(err.statusCode || 500).json({
        error: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null,
        message: err.message
    })
}


export default errorHandler;