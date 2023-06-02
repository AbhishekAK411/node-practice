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
    isEmailVerified : Boolean
});

export default mongoose.model("Users", user);