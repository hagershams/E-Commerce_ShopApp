import express from 'express';
const CouponRoutes = express.Router()
import * as CouponControllers from './review.controller.js'

CouponRoutes.route('/').get(CouponControllers.GetAllCoupons)
.post(CouponControllers.AddCoupon)
CouponRoutes.route('/:id').get(CouponControllers.Get_Check_Coupon)//After user enters the promo code
.delete(CouponControllers.DeleteCoupon)

export default CouponRoutes;