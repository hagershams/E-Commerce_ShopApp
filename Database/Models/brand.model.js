import mongoose from "mongoose";
const BrandSchema = new mongoose.Schema({
    Name:{
        type:String,
        unique:[true,'Name must be unique'],
        tirm:true,
        required:true,
        minLength:[2,'Too Short']
    },
    Slug:{
        type:String,
        lowerCase:true,
        required:true
    },
    Logo:String,
},{timestamps:true})
const BrandModel = mongoose.model("Brand",BrandSchema)
export default BrandModel;
