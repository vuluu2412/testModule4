import {Schema, model} from 'mongoose';
import {IBrand} from "./brands";
import {IUser} from "./users";

interface ILaptop {
    user ?: IUser;
    name ?: string;
    price ?: number;
    quantity ?: number;
    Brand ?: IBrand;

}
let LaptopSchema = new Schema<ILaptop>({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    name: String,
    price: Number,
    quantity: Number,
    Brand: {
        type: Schema.Types.ObjectId,
        ref:"Brand"
    }
});
let Laptop = model <ILaptop>('Laptop', LaptopSchema);
export {Laptop};