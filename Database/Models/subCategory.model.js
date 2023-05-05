import mongoose from "mongoose";
const SubCategorySchema = new mongoose.Schema({
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
    Category:{
        type:mongoose.Types.ObjectId,
        ref:"Category"
    },
},{timestamps:true})
const SubCategoryModel = mongoose.model("SubCategory",SubCategorySchema)
export default SubCategoryModel;
