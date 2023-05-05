import BrandModel from '../../../Database/Models/brand.model.js'
import AppError from '../../../Middleware/Error/AppError.js'
import HandleError from '../../../Middleware/Error/Error.Handler.js'
import * as CRUDS from '../../../Middleware/Utility/Simplify/CRUDs.js'
import slugify from 'slugify'


const GetAllBrands = CRUDS.GetAll(BrandModel)
const GetBrand = CRUDS.GetItem(BrandModel)
const DeleteBrand = CRUDS.DeleteItem(BrandModel)
const AddBrand = HandleError (async(req,res,next)=>{
    req.body.Name=req.body.Name
    req.body.Slug=slugify(req.body.Name)
    if(req.file) req.body.Logo = req.file.fileName
    let results = await BrandModel.insertMany(req.body)
    !results && next(AppError("Not Acceptable Try Again",406))
    res.status(400).json({message:"Success",results})
})
const UpdateBrand = HandleError (async(req,res,next)=>{
    let {id}= req.params;
    if(req.body.Name) {
        req.body.Name=req.body.Name
        req.body.Slug=slugify(req.body.Name)
    }
    if(req.file) req.body.Logo = req.file.fileName
    let results = await BrandModel.findOneAndUpdate({_id:id},req.body,{new:true}).select(-_id,-Slug)
    !results && next(AppError("Brand Not Found",404))
    res.status(400).json({message:"Success",results})
})
export {
    GetAllBrands,AddBrand,GetBrand,DeleteBrand,UpdateBrand
}