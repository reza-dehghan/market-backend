import{Request,Response} from "express";
import { AuthService } from "../services/auth.service";

export class AuthController{

    private authService =new AuthService();
    async signup(req:Request,res:Response){

        const {name,email,password} = req.body;

        const user =await this.authService.signup(
            name,email,password
        );

        return res.status(201).json(user);
    }

    async login(req:Request,res:Response){
        const {email,password}=req.body;

        const result = await this.authService.login(
            email,password
        );
        return res.status(200).json(result);
    }

    async verifyOtp(req:Request,res:Response){
        const {email,otp} = req.body;
        const result =await this.authService.verifyOtp(
            email,
            otp
        );
        return res.status(200).json(result);
    }

}



