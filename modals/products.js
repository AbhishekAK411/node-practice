import mongoose from "mongoose";
import { Schema } from "mongoose";

const Product = new Schema({
    product_name : String,
    product_price: Number,
    product_category: String,
    product_image : [String]
});

export default mongoose.model("Products", Product);