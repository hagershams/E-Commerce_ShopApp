import slugify from 'slugify'
import CategoryModel from '../../../Database/Models/category.model.js'
import AppError from '../../../Middleware/Error/AppError.js'
import HandleError from '../../../Middleware/Error/Error.Handler.js'
import * as CRUDS from '../../../Middleware/Utility/Simplify/CRUDs.js'


const GetAllCategories = CRUDS.GetAll(CategoryModel)
const GetCategory = CRUDS.GetItem(CategoryModel)
const DeleteCategory = CRUDS.DeleteItem(CategoryModel)
const AddCategory = HandleError (async(req,res,next)=>{
    let {Name} = req.body;
    let results = await CategoryModel.insertMany({Name,Slug:slugify(Name)})
    !results && next(AppError("Not Found",404))
    res.status(400).json({message:"Results",results})
})
const UpdateCategory = HandleError (async(req,res,next)=>{
    let {id}= req.params;
    let {Name}= req.body;
    let results = await CategoryModel.findByIdAndUpdate(id,{Name,Slug:slugify(Name)},{new:true})
    !results && next(AppError("Not Found",404))
    res.status(400).json({message:"Results",results})
})
export {
    GetAllCategories,AddCategory,GetCategory,DeleteCategory,UpdateCategory
}