import users from "../modals/users.js";

export const login = async (req,res) =>{
    try{
        
        const {userEmail, userPassword} = req.body;
        if(!userEmail) return res.send("Email is required");
        if(!userPassword) return res.send("Password is required");
        const response = await users.find({email: userEmail}).exec();

        if(response.length){
            if(userPassword === response[0].password){
                return res.send("You are logged in.");
            } else {
                return res.send("Check your password.");
            }
        } else {
            return res.send("User not found.");
        }

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


// export const updateUser = async (req,res) => {
//     try{
//         const {userName, userEmail, userPassword, changeEmail} = req.body;
//         if(!userName) return res.send("Username is required");
//         if(!userEmail) return res.send("Email is required");
//         if(!userPassword) return res.send("Password is required");

//         const response = await users.find({email : userEmail}).exec();
        
//         if(userEmail !== response[0].email){
//             return res.send("Email is not the same.");
//         } else {
//             response[0].name = userName;
//             response[0].email = changeEmail;
//             response[0].password = userPassword;

//             await users.updateOne({name:response[0].name,email:response[0].email,password: response[0].password});

//             return res.send("saved details successfully");
//         }



//     } catch(error){
//         return res.send(error);
//     }
// }


export const updateUser = async(req,res) =>{

     try{

        const {userEmail, userName} = req.body;
        const response = await users.findOneAndUpdate({email: userEmail}, {name:userName}).exec();
        res.send(response);
     } catch(error){
        return res.send(error);
     }


}
