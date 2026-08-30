import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"
import { AppError } from "../utils/AppError";

export const authMiddleware = (
    req:Request,
    res:Response,
    next:NextFunction
)=>{
     const authHeader =req.headers.authorization;
     if (!authHeader){
        throw new AppError("Authentication requires",401);
     }

     const token= authHeader.split(" ")[1];

     if (!token){
        throw new AppError("Invalid token",401);
     }

     try{

        const decoded =jwt.verify(
            token,
            process.env.JWT_SECRET as string
        );

        (req as any).user = decoded;

        next();

     }
     catch{
        throw new AppError("Invalid or expired token",401)
     }
};