import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({
    Code:{
        type:String,
        unique:true,
        required:true,
        minLength:[2,'Too Short']
    },
    Expires :{
        type:Date,
        required:true
    },
    Discount:{
        type:Number,
        required:true,
    }
})
const CouponModel = mongoose.model("Coupon",CouponSchema)
export default CouponModel;