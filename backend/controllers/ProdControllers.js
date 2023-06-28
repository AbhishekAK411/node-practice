import products from "../modals/products.js";

export const addProduct = async (req,res) => {
    try{
        // console.log(req.body);
        const {Name, Price, Image} = req.body;
        if(!Name) return res.send("Name is required");
        if(!Price) return res.send("Price is required");

        const product = new products({
            product_name : Name,
            product_price: Price,
            product_image: Image
        });

        await product.save();

        return res.send(product);
    } catch(error){
        console.log(error,"add-product error");
    }
}


export const getProduct = async (req,res) => {
    try{

        const response = await products.find({}).exec();
        if(response){
            return res.send(response);
        } else {
            return res.send("No Products found");
        }

    } catch(error){
        return res.send(error);
    }
}