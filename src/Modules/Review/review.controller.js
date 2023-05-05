import ReviewModel from '../../../Database/Models/review.model.js'
import AppError from '../../../Middleware/Error/AppError.js'
import HandleError from '../../../Middleware/Error/Error.Handler.js'
import * as CRUDS from '../../../Middleware/Utility/Simplify/CRUDs.js'


const GetAllReviews = CRUDS.GetAll(ReviewModel)
const GetReview = CRUDS.GetItem(ReviewModel)
const DeleteReview = CRUDS.DeleteItem(ReviewModel)
const AddReview = HandleError (async(req,res,next)=>{
    let {Comment,Rating} = req.body;
    let results = await ReviewModel.insertMany({Comment,Rating})
    !results && next(AppError("Not Found",404))
    res.status(400).json({message:"Results",results})
})

export {
    GetAllReviews,AddReview,GetReview,DeleteReview}