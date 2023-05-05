import mongoose from "mongoose";
const CategorySchema = new mongoose.Schema({
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
    Image:String,
},{timestamps:true})
const CategoryModel = mongoose.model("Category",CategorySchema)
export default CategoryModel;
