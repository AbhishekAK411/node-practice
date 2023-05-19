export const login = (req,res) =>{
    try{
        res.send("Login function");
    } catch(error){
        console.log(error, "login Error");
    }
}

export const register = (req,res) =>{
    try{
        res.send("register function");
    } catch(error){
        console.log(error, "register error");
    }
}