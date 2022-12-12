import {Router} from "express";
import UserController from "../controller/userController";

export const userRouter = Router();
userRouter.get('/', UserController.getAll);
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);
userRouter.put('/changePassword/:id',UserController.changePassword)