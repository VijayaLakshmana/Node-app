"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function dataBase() {
    mongoose_1.default
        .connect('mongodb://localhost:27017/myapp')
        .then(() => {
        console.log('Connected to MongoDB');
    })
        .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}
exports.default = dataBase;
