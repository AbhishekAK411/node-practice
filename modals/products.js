import mongoose from "mongoose";
import { Schema } from "mongoose";

const product = new Schema({
    product_name : String,
    product_price: Number,
    product_category: String
});

export default product;