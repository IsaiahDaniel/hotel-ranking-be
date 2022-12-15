"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.log("err", err);
    res.status(err.statusCode || 500).json({
        error: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null,
        message: err.message
    });
};
exports.default = errorHandler;
//# sourceMappingURL=errors.js.map