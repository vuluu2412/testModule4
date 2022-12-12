import {Router} from "express";
import LaptopController from "../controller/laptopController";


export const laptopRouter = Router();
laptopRouter.get('/laptops',LaptopController.getAll);
laptopRouter.get('/laptops/sort-quantity',LaptopController.showDownQuantity);
laptopRouter.get('/laptops/max-price', LaptopController.showLaptopMax);
laptopRouter.post('/laptops', LaptopController.addLaptop);
laptopRouter.put('/laptops/:id', LaptopController.editLaptop);
laptopRouter.delete('/laptops/:id', LaptopController.deleteLaptop);
laptopRouter.get('/laptops/:id',LaptopController.findByIdLaptop);
laptopRouter.post('/laptops/search', LaptopController.findByName);
laptopRouter.post('/laptops/search/brand', LaptopController.findByBrand);
laptopRouter.post('/laptops/search/price', LaptopController.findByPrice);

