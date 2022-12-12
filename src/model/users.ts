import {model, Schema} from "mongoose";

export interface IUser {
    username ?: string;
    password ?: string;
    phoneNumber ?: string;
}
const userSchema = new Schema<IUser>({
    username: String,
    password: String,
    phoneNumber: String
});
const User = model<IUser>('user', userSchema)
export {User};