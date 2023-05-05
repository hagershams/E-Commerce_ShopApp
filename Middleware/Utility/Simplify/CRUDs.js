import AppError from '../../Error/AppError.js'
import HandleError from '../../Error/Error.Handler.js'
const GetAll =(model)=>{
    return HandleError(async(req,res,next)=>{
        let results = await model.find()
        !results && next(AppError("Not Found",404))
        res.status(400).json({message:"Success",results})
    })
}
const GetItem =(model)=>{
    return HandleError (async(req,res,next)=>{
        let {id}= req.params;
        let results = await model.findById({id})
        !results && next(AppError("Not Found",404))
        res.status(400).json({message:"Success",results})
    })
}
const DeleteItem =(model)=>{
    return HandleError (async(req,res,next)=>{
        let {id}= req.params;
        let results = await model.findByIdAndDelete({id})
        !results && next(AppError("Not Found",404))
        res.status(400).json({message:"Success",results})
    })
}
export {GetAll,GetItem,DeleteItem}