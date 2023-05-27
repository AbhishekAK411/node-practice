import users from "../modals/users.js";

export const login = (req,res) =>{
    try{
        res.send("Login function");
    } catch(error){
        console.log(error, "login Error");
    }
}

export const register = async (req,res) =>{
    try{
        
        const {userName, userEmail, userPassword, userConfirmPassword} = req.body;
        if(!userName) return res.send("user name is required");
        if(!userEmail) return res.send("Email is required");
        if(!userPassword) return res.send("Password is required");
        if(!userConfirmPassword) return res.send("Confirm Password is required");
        if(userPassword.length <=8 && userConfirmPassword.length <=8){
            return res.send("Length should be more than 8 characters");
        }
        if(userPassword !== userConfirmPassword){
            return res.send("Passwords do not match.");
        }

        const response = await users.find({email:userEmail}).exec();

        if(response.length){
            return res.send("Email is already registered.");
        }

        const user = new users({
            name: userName,
            email: userEmail,
            password: userPassword
        });

        await user.save();

        return res.send("Registration Successful");

    } catch(error){
        console.log(error, "register error");
    }
}