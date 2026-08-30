import {Request,Response,NextFunction} from "express";
import { AppError } from "../utils/AppError";
export const errorHandler=(
    err:Error,
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    console.error(err);

    if(err instanceof AppError){
        return res.status(err.statusCode).json({
            message:err.message
        });
    }

    
};