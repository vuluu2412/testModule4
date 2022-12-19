import {Router} from "express";
import UserController from "../controller/userController";
import {router} from "./router";
import {auth} from "../middleware/auth";

export const userRouter = Router();
userRouter.get('/', UserController.getAll);
userRouter.post('/register', UserController.register);
userRouter.post('/login', UserController.login);
userRouter.put('/changePassword/:id',UserController.changePassword)