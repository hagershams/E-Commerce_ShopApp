import express from 'express';
const UserRoutes = express.Router()
import * as AdminControllers from './admin.controller.js'

//SignIn .. SignUp .. LogOut .. Verify Account .. Profile Page
//Brand-Controllings (Add brand - Delete brand) 
//Category-Controllers (Add Category - Delete Category - Update Category)
//Coupon-Controllers (Add Coupon - Delete Coupons)
//Product-Controllers (Get All Products - Add Product - Delete Product - Update Product)
//SubCategory-Controllers (Add SubCategory - Delete SubCategory - Update SubCategory)
//User Controllers?

AdminRoutes.route('/').get(AdminControllers.SignUp).post(AdminControllers.SignIn)//Get all merged to Users Controllers
AdminRoutes.route('/:id').get(AdminControllers.ProfilePage).delete(AdminControllers.DeleteAccount)
.put(AdminControllers.UpdateAccount)

export default UserRoutes;
 