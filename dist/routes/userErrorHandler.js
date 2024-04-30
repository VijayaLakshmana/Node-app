"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userErrorHandler = (err, req, res) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
};
exports.default = userErrorHandler;
