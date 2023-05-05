import slugify from 'slugify'
import SubCategoryModel from '../../../Database/Models/subCategory.model.js'
import AppError from '../../../Middleware/Error/AppError.js'
import HandleError from '../../../Middleware/Error/Error.Handler.js'
import * as CRUDS from '../../../Middleware/Utility/Simplify/CRUDs.js'


const GetAllSubCategories = CRUDS.GetAll(SubCategoryModel)
const GetSubCategory = CRUDS.GetItem(SubCategoryModel)
const DeleteSubCategory = CRUDS.DeleteItem(SubCategoryModel)
const AddSubCategory = HandleError (async(req,res,next)=>{
    let {Name,Category} = req.body;
    let results = await SubCategoryModel.insertMany({Name,Slug:slugify(Name),Category})
    !results && next(AppError("Not Found",404))
    res.status(400).json({message:"Results",results})
})
const UpdateSubCategory = HandleError (async(req,res,next)=>{
    let {id}= req.params;
    let {Name}= req.body;
    let results = await SubCategoryModel.findByIdAndUpdate(id,{Name,Slug:slugify(Name)},{new:true})
    !results && next(AppError("Not Found",404))
    res.status(400).json({message:"Results",results})
})
export {
    GetAllSubCategories,AddSubCategory,GetSubCategory,DeleteSubCategory,UpdateSubCategory
}