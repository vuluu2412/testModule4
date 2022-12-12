import {Request, Response} from "express";
import {Brand} from "../model/brands";
class BrandController{
    getAll =async (req:Request,res:Response)=>{
        let brand = await Brand.find();
        return res.status(201).json(brand)
    }
    addBrand = async (req:Request,res:Response)=>{
        await Brand.insertMany(req.body);
        return res.status(200).json({
            message: "add success"
        })
    }
}
export default new BrandController();