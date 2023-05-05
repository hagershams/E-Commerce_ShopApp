import mongoose from "mongoose";
const WishlistSchema = new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    Items:[{
        type:mongoose.Types.ObjectId,
        ref:"product"
    }],
},{timestamps:true})
const WishlistModel = mongoose.model("WishList",WishlistSchema)
export default WishlistModel;
