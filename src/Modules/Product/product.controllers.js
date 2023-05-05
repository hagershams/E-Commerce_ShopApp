import slugify from "slugify";
import ProductModel from "../../../Database/Models/product.model.js";
import HandleError from "../../../Middleware/Error/Error.Handler.js";
import * as CRUDS from '../../../Middleware/Utility/Simplify/CRUDs.js'
import AppError from "../../../Middleware/Error/AppError.js";

const GetAllProducts = CRUDS.GetAll(ProductModel)
const DeleteProduct = CRUDS.DeleteItem(ProductModel)
const GetProduct = CRUDS.GetItem(ProductModel)
const AddProduct = HandleError( async(req,res,next)=>{
    req.body.Slug =slugify(req.body.Name) //Pre
    req.body.CreatedBy = req.user._id
    req.body.PriceAfterDiscount = (req.body.Price)-((req.body.Price)*(req.body.Discount /100)) //Pre
    req.body.CoverImage = req.files.CoverImage[0].fileName
    req.body.Images = req.files.Images.map(img=>img.fileName)
    // req.body.Name = req.body.Name
    // req.body.Slug =slugify(req.body.Name) //Pre
    // req.body.Description =req.body.Description
    // req.body.Category = req.body.Category
    // req.body.SubCategory = req.body.SubCategory
    // req.body.Brand = req.body.Brand
    // req.body.CreatedBy = req.user._id
    // req.body.Price = req.body.Price
    // req.body.Discount = req.body.Discount
    // req.body.PriceAfterDiscount = (req.body.Price)-((req.body.Price)*(req.body.Discount /100)) //Pre
    // req.body.Quentity = req.body.Quentity //Post ==> Sold Count
    // req.body.CoverImage = req.files.CoverImage[0].fileName
    // req.body.Images = req.files.Images.map(img=>img.fileName)
    // req.body.Colors = req.body.Colors
    let results = new ProductModel(req.body)
    await results.save()
    !results && next(AppError("Cannot Add Product",406))
    res.status(201).json({message:"Success",results})
})


const UpdateProduct = HandleError(async(req,res,next)=>{
    let {id}= req.params;
    if(req.body.Name) req.body.Slug = slugify(req.body.Name)
    if(req.body.Discount) req.body.PriceAfterDiscount = (req.body.Price)-((req.body.Price)*(req.body.Discount /100)) //Pre
    if(req.files){
        req.body.CoverImage = req.files.CoverImage[0].fileName
        req.body.Images = req.files.Images.map(img=>img.fileName)
    }
    let results = await ProductModel.findOneAndUpdate({_id:id},req.body,{new:true})
    !results && new AppError('Product Not Found',404)
    res.status(202).json({message:"Success",results})
})




export{
    GetAllProducts,DeleteProduct,GetProduct,AddProduct,UpdateProduct
}