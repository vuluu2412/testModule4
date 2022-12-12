import {Request, Response} from "express";
import {Laptop} from "../model/laptops";
import {Brand} from "../model/brands";

class LaptopController {
    getAll = async (req: Request, res: Response) => {
        let laptops = await Laptop.find().sort({'price': 1}).populate("Brand");
        return res.status(200).json(laptops);

    }
    showDownQuantity = async (req: Request, res: Response) => {
        let laptops = await Laptop.find().sort({'quantity': -1}).populate("Brand");
        return res.status(200).json(laptops);

    }
    showLaptopMax = async (req:Request, res: Response) => {
        let laptops = await Laptop.find().sort({'price': -1}).limit(1).populate("Brand");
        return res.status(200).json(laptops);
    }

    addLaptop = async (req: Request, res: Response) => {
        let b = req.body;
        await Laptop.create(b)
        return res.status(200).json({
            message: "add success"
        })
    }
    editLaptop = async (req: Request, res: Response) => {
        await Laptop.updateMany({_id: req.params.id}, req.body);
        return res.status(200).json({
            message: "edit success"
        })
    }
    deleteLaptop = async (req: Request, res: Response) => {
        await Laptop.deleteOne({_id: req.params.id}, req.body);
        return res.status(200).json({
            message: "delete success"
        })
    }
    findByIdLaptop = async (req: Request, res: Response) => {
        let p = await Laptop.findById(req.params.id);
        res.status(200).json(p)

    }

    findByName = async (req: Request, res: Response) => {
        let findLaptop = await Laptop.find({'name': new RegExp(req.body.name, 'i')});
        return res.status(201).json(
            findLaptop
        )
    }
    findByBrand = async (req: Request, res: Response) => {
        let findBrand = await Brand.find({'brandName': new RegExp(req.body.brandName, 'i')});
        return res.status(201).json(
            findBrand
        )
    }
    findByPrice = async (req: Request, res: Response) => {
        let from = req.body.from
        let to =req.body.to
        // let findPrice = await Laptop.find( { price: { $in: [ 100, 5000 ] } }, { _id: 0 } )
        let findPrice = await Laptop.find({$and:[{'price':{$gte:from,$lte:to}}]})
        return res.status(200).json(
            findPrice
        )
    }
}

export default new LaptopController();