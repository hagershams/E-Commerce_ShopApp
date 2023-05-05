import mongoose from "mongoose";
const ReviewSchema = new mongoose.Schema({
    Comment:{
        type:String,
        tirm:true,
        required:true,
        minLength:[2,'Too Short'],
        maxLenght:[500,'Too Long']
    },
    Rating:{
        type:Number,
        min:[1,'Rate Must be 1 or Greater'],
        max:[5,'Rate Limit is 5'],
        default:0
    },
    UserId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    ProductId:{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    }
},{timestamps:true})
const ReviewModel = mongoose.model("Review",ReviewSchema)
export default ReviewModel;
