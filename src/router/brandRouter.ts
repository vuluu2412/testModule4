import {Router} from "express";
import BrandController from "../controller/brandController";


export const brandRouter = Router();
brandRouter.get('/brands',BrandController.getAll);
brandRouter.post('/brands', BrandController.addBrand);
