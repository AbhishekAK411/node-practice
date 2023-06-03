import mongoose from "mongoose";
import { Schema } from "mongoose";

const user = new Schema({
    username: String,
    password: String,
    email: String,
    number: Number,
    otpNumber : String,
    otpEmail : String,
    isNumberVerified : Boolean,
    isEmailVerified : Boolean,
    otpLoginNumber : String,
    otpLoginEmail : String
});

export default mongoose.model("Users", user);