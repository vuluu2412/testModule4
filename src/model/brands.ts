import {Schema, model} from 'mongoose'
export interface IBrand {
    brandName ?: string;
    description ?: string;
}
const BrandSchema = new Schema<IBrand>({
    brandName : String,
    description:String

});
const Brand = model<IBrand>('Brand', BrandSchema);
export {Brand};