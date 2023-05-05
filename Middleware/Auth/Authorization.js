import AppError from "../Error/AppError"
import HandleError from "../Error/Error.Handler"
export const AuthorizationCheck =(...roles)=>{
    return HandleError(async(req,res,next)=>{
        if (!roles.includes(req.user.Role)) return new AppError(`You Are ${req.user.Role}, Not Authorized To Access ..`,401)
        next()
    })
}


