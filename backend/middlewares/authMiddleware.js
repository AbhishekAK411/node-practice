export const checkFields = (req,res) =>{

    try{
        const { userEmail, userName } = req.body;
        if(!userEmail) return res.send("Email not found in middleware.");
        if(!userName) return res.send("Username not found in middleware.");

    } catch(error){
        res.send(error);
    }
}