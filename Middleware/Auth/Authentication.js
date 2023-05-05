import jwt from 'jsonwebtoken';
import AppError from '../Error/AppError.js';
import UserModel from '../../Database/Models/user.model.js';
import HandleError from '../Error/Error.Handler.js';

//After Sign In .. Creating session token
export const CreateToken = (user)=>{
    let {_id,Email,Role,Name} = user
    let iat = Date.now()
    let token = jwt.sign({_id,Email,Role,Name,iat},process.env.PRIVATE_KEY)
    return token
}

export const AuthenticationCheck = HandleError(async(req,res,next)=>{
    let token = req.body.token
    //Step 1 ==> Token provided or not
    let authorization = req.headers['authorization']
    if (!token||!authorization||authorization.startsWith('Bearer')==false) 
        return new AppError('Please Provide Your Token ..',403)

    //Step 2 ==> Verify Token
    let Token = token || authorization
    let decode = jwt.verify(Token,process.env.PRIVATE_KEY,(err,decoded)=>{
        if(err) return new AppError('Not Valied Token ..',403)
    })

    //Step 3 ==> User of Token is exist or not
    let user = await UserModel.findById(decode._id)
    if(!user) return new AppError('Not-Exist User Of This Token..',404)

    //Step 4 ==> Check Token Creation Time
    if(user.ChangePasswordAt){
        let ChangeTime = parseInt(user.ChangePasswordAt.getTime()/1000)
        if (ChangeTime>decode.iat) return new AppError('Not Valied Token As Password Changed ..',403)
    }

    //Step 5 ==> Check Last Log out Time
    if(user.LoggedOutAt){
        let LogOutTime = parseInt(user.LoggedOutAt.getTime()/1000)
        if (LogOutTime>decode.iat) return new AppError('Not Valied Token You have Logged Out..',403)
    }
    req.user = user
    next()
})

// export const CheckTokenInParams =async(req,res,next)=>{
//     let {token} = req.params;
//     jwt.verify(token,process.env.PRIVATE_KEY_EMAIL,(err,decoded)=>{
//         if (err){
//             console.log(err);
//             res.json({message:"Invalid"})
//         }
//         else{
//             req.Email = decoded
//             next()
//         }
//     })
// }