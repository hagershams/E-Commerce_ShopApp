import multer from "multer";
import {nanoid} from "nanoid";
import AppError from "../../Error/AppError";

let options =(FolderName)=>{
    let storage = multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,`Uploads/${FolderName}`)
        },
        filename:(req,file,cb)=>{
            cb(null,nanoid()+"_"+file.originalname)
        }
    });
    let FileFilter =(req,file,cb)=>{
        if(file.mimetype.StartsWith("image")){
            cb(null,true)
        }
        else{ 
            cb(new AppError("Not Valied FileType" , 406))
        }
    };
    return multer({storage,FileFilter})
}

export const SinglePhoto =(FolderName,FieldName)=> options(FolderName).single(FieldName)

export const ArrayOfFields =(FolderName,FieldName)=> options(FolderName).fields(FieldName)
