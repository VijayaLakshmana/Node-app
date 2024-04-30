import express from 'express';
import UserController from '../controllers/UserController';
import userErrorHandler from './userErrorHandler';

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser);


router.use(userErrorHandler);


export default router;
