import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        tirm:true,
        required:true,
        minLength:[2,'Too Short']
    },
    Email:{
        type:String,
        unique:[true,'Email must be unique'],
        tirm:true,
        required:[true,'Email is required'],
        minLength:[15,'Too Short']        
    },
    Password:{
        type:String,
        required:[true,'Password is required'],
        minLength:[6,'Too Short']        
    },
    ChangePasswordAt:Date,
    Phone:{
        type:String,
        required:[false,'Phone Number is required'],    //change it to be true
    },
    Role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    Address:{
        type:String,
        required:[true,'Address is required'],
        minLength:[20,'Too Short']},
    ProfileImage:String,
    Verified:{
        type:Boolean,
        default:false
    },
    IsActive:{
        type:Boolean,
        default:false
    },
    IsLogged: {
        type:Boolean,
        default:false
    },
    LoggedOutAt:Date,
    Wishlist:[{
        type:mongoose.Types.ObjectId,
        ref:"wishlist"
    }],
    Review:[
        {
        type:mongoose.Types.ObjectId,
        ref:"review"
    }]
},{timestamps:true})
 
const UserModel = mongoose.model("User",UserSchema)
export default UserModel;