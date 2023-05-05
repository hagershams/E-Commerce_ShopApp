import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    Name:{
        type:String,
        unique:[true,'Name must be unique'],
        tirm:true,
        required:true,
        minLength:[2,'Too Short']
    },
    Description:{
        type:String,
        tirm:true,
        required:true,
        minLength:[2,'Too Short'],
        maxLength:[300,'Too Long']
    },
    Slug:{
        type:String,
        lowerCase:true,
        required:true
    },
    Category:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        required:[true,'Product must have category'],

    },
    SubCategory:{
        type:mongoose.Types.ObjectId,
        ref:"SubCategory",
        required:[true,'Product must have subcategory'],
    },
    Brand:{
        type:mongoose.Types.ObjectId,
        ref:"Brand",
        //required:[true,'Product must have Brand']
    },
    CreatedBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    Price:{
        type:Number,
        required:[true,'Price is required'],
        min:0
    },
    Discount:{
        type:Number,
        default:10
    },
    PriceAfterDiscount:{
        type:Number,
        min:0
    },
    Quentity:{
        type:Number,
        required:true,
        default:0
    },
    CoverImage:String,
    Images:[String],
    Colors:[String],
    RatingCount:{
        type:Number,
        min:[1,'Rate Must be 1 or Greater'],
        default:0
    },
    RatingAverage:{
        type:Number,
        min:[1,'Rate Must be 1 or Greater'],
        max:[5,'Rate may be 5 or Less'],
    },
    SoldCount:{
        type:Number,
        min:[1,'Rate Must be 1 or Greater'],
        default:0
    },
    Review:[
        {
        type:mongoose.Types.ObjectId,
        ref:"Review"
    }]
},{timestamps:true})
 
const ProductModel = mongoose.model("Product",ProductSchema)
export default ProductModel;