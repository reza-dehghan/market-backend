import { Request,Response,NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const adminMiddleware=(
    req:Request,
    res:Response,
    next:NextFunction
)=>{

    const user = (req as any).user;

    if (!user){
        throw new AppError("Authentication required",401);

    }
    if (user.role !== "admin"){
        throw new AppError("Admin access required",403);
    }
    next();
};