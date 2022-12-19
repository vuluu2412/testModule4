import {Router} from "express";
import {laptopRouter} from "./laptopRouter";
import {brandRouter} from "./brandRouter";
import {userRouter} from "./userRouter";
import {auth} from "../middleware/auth";


export const router = Router();
router.use('',userRouter);
router.use('',laptopRouter);
router.use('',brandRouter);