import users from "../modals/users.js";
import {v4 as uuidv4} from "uuid";

export const otpForRegister = async (req,res) =>{
    try{

        const { number } = req.body;
        if(!number) return res.send("Number is required.");

        const code = uuidv4();
        const response = await users.find({number}).exec();
        if(response.length) return res.send("User is already registered.");

        const user = new users({
            number,
            otpNumber: code,
            isNumberVerified: false
        });

        await user.save();
        return res.send("Check your mobile for OTP.");
        
    } catch(err){
        return res.send(err);
    }
}


export const otpCheckRegister = async (req,res) =>{

    try{

        const { number, otp } = req.body;
        if(!number) return res.send("number is required.");
        if(!otp) return res.send("OTP is required.");

        const response = await users.find({number}).exec();
        if(!response.length) return res.send("User not found.");

        if(response[0].otpNumber == otp){
            await users.findOneAndUpdate({number},{isNumberVerified: true}).exec();
            return res.send("Mobile number verified through OTP.");
        }
        return res.send("OTP is incorrect.");


    }catch(err){
        return res.send(err);
    }


}


export const otpEmailRegister = async (req,res) =>{

    try{

        const {number, email} = req.body;
        if(!number) return res.send("Number is required.");
        if(!email) return res.send("Email is required.");

        const code = uuidv4();
        await users.findOneAndUpdate({number}, {email, otpEmail: code, isEmailVerified: false}).exec();
        return res.send("Check your Email for OTP.");


    } catch(err){
        return res.send(err)
    }
}


export const otpCheckEmail = async (req,res) =>{
    try{
        const {email, otp} = req.body;
        if(!email) return res.send("email is required.");
        if(!otp) return res.send("OTP is required.");

        const response = await users.find({email}).exec();
        if(!response.length) return res.send("User not found.");

        if(response[0].otpEmail == otp){
            await users.findOneAndUpdate({email}, {isEmailVerified: true}).exec();
            return res.send("Email verified through OTP.");
        }
        return res.send("OTP is incorrect.");
    } catch(err){
        return res.send(err);
    }
}