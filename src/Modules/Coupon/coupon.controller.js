import CouponModel from '../../../Database/Models/coupon.model.js';
import AppError from '../../../Middleware/Error/AppError.js'
import HandleError from '../../../Middleware/Error/Error.Handler.js'
import * as CRUDS from '../../../Middleware/Utility/Simplify/CRUDs.js'


const GetAllCoupons = CRUDS.GetAll(CouponModel)
const DeleteCoupon = CRUDS.DeleteItem(CouponModel)
const AddCoupon = HandleError (async(req,res,next)=>{
    let {Code,Expires,Discount} = req.body;
    let results = await CouponModel.insertMany({Code,Expires,Discount})
    !results && next(AppError("Not Found",404))
    res.status(400).json({message:"Results",results})
})
const Get_Check_Coupon = HandleError (async(req,res,next)=>{
    let {Code} = req.params;
    let results = await CouponModel.findOne({Code})
    !results && next(AppError("Not Found",404))
    if(results.Expires < Date.now()) return next(AppError("Not Found",404))
    res.status(400).json({message:"Results",results})
})

export{GetAllCoupons,AddCoupon,Get_Check_Coupon,DeleteCoupon}