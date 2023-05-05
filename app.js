process.on("uncaughtException",(err,req,res,next)=>{
    console.log(err);
})

import * as dotenv from 'dotenv';
dotenv.config()
import express from 'express';
const app = express()
let port = process.env.PORT||8000
import AppError from './Middleware/Error/AppError.js'
import{connection} from './Database/connection.js';
import HandleGlobalErrors from './Middleware/Error/Global.Error.Handler.js'
import CategoryRoutes from './src/Modules/Category/category.routes.js'
import SubCategoryRoutes from './src/Modules/SubCategory/subcategory.routes.js'
import BrandRoutes from './src/Modules/Brand/brand.routes.js'
import ProductRoutes from './src/Modules/Product/product.routes.js'
import UserRoutes from './src/Modules/User/admin.routes.js'
import ReviewRoutes from './src/Modules/Review/review.routes.js'
import CouponRoutes from './src/Modules/Coupon/coupon.routes.js'

//Fire Connection
connection();

//Middleware
app.use(express.json())
app.use('Uploads',express.static('Uploads'))

//Routes
app.use('/api/v1/category',CategoryRoutes) //process.env.CATEGORY_ROUTE_URL
app.use('/api/v1/subcategory',SubCategoryRoutes) //process.env.SUBCATEGORY_ROUTE_URL
app.use('/api/v1/brand',BrandRoutes) //process.env.BRAND_ROUTE_URL
app.use('/api/v1/product',ProductRoutes) //process.env.PRODUCT_ROUTE_URL
app.use('/api/v1/user',UserRoutes) //process.env.USER_ROUTE_URL
app.use('/api/v1/review',ReviewRoutes) //process.env.REVIEW_ROUTE_URL
app.use('/api/v1/coupon',CouponRoutes) //process.env.COUPON_ROUTE_URL



//Dealing with Errors
app.use('*',(req,res,next)=>{
    next(new AppError(`Invalid Url ${req.originalUrl}`,404))
})
app.use(HandleGlobalErrors)

process.on("unhandledRejection",(err,req,res,next)=>{
    next(new AppError(`Error Connecting to Database`,404))
})



app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
})