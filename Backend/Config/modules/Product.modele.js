import { Schema, model } from "mongoose";

const ProductSchema=new Schema ({
    price:{
        type:Number,
        required:true
    },
    name:{
        type:String,
            required:true
        },
    Image:{
        type:String,
        required:true
    }
    

},{
    timestamps:true
});
const Product=model('Product',ProductSchema)
export default Product