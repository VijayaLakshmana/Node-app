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
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userService_1.default.createUser(req.body);
                if (user === false) {
                    res.status(409).json({ error: 'Given Email address is already used' });
                    return;
                }
                res.status(201).json(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const user = yield userService_1.default.deleteUser(id);
                if (!user) {
                    res.status(404).json({ error: 'User not found' });
                    return;
                }
                res.json(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getAllUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userService_1.default.getAllUsers();
                res.json(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getUserById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const user = yield userService_1.default.getUserById(id);
                if (!user) {
                    res.status(404).json({ error: 'User not found' });
                    return;
                }
                res.json(user);
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { name, email, age } = req.body;
            try {
                const user = yield userService_1.default.updateUser(id, { name, email, age });
                if (!user) {
                    res.status(404).json({ error: 'User not found' });
                }
                else {
                    res.json(user);
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new UserController();
