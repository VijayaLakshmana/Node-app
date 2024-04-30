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
const userModel_1 = __importDefault(require("../models/userModel"));
class UserRepository {
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return userModel_1.default.findOne({ email });
        });
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return userModel_1.default.create(userData);
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return userModel_1.default.findByIdAndDelete(id);
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return userModel_1.default.find();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return userModel_1.default.findById(id);
        });
    }
    updateUser(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return userModel_1.default.findByIdAndUpdate(id, userData, { new: true });
        });
    }
}
exports.default = new UserRepository();
