import {Router} from "express";
import {laptopRouter} from "./laptopRouter";
import {brandRouter} from "./brandRouter";
import {userRouter} from "./userRouter";


export const router = Router();
router.use('',laptopRouter);
router.use('',brandRouter);
router.use('',userRouter);