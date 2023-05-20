export const addProduct = (req,res) => {
    try{
        console.log(req.body);
        return res.send("add Product function");
    } catch(error){
        console.log(error,"add-product error");
    }
}