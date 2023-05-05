let MODE = 'DEVELOPMENT' // or PRODUCTION
const HandleGlobalErrors=(err,req,res,next) =>{
    if (MODE =='DEVELOPMENT') {
        DevMode(res,err)
    }
    else{
        ProdMode(res,err)
    }
}
const DevMode =(res,err)=>{
    let code = err.status || 500
    res.status(code).json({err:err.message,stack:err.stack})
}
const ProdMode =(res,err)=>{
    let code = err.status || 500
    res.status(code).json({err:err.message})
}
export default HandleGlobalErrors;



/*
(err,req,res,next)=>{
    console.log(err);
    let code = err.status || 500
    res.status(code).json({message:"Error from global"}
    )}
*/