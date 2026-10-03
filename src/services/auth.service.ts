import{userRepository} from "../repositories/user.repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/AppError";


export class AuthService{

    /**
     * It performs the sign-up operation.
     * @param {string} name - name of client 
     * @param {string} email - email of client
     * @param {string} password - password of client 
     * @returns {Promise<User>}
     */
    async signup(
        name:string,
        email:string,
        password:string
    ){
        const existingUser = await userRepository.findOne({
            where:{email}
        });

        if (existingUser) {
            throw new AppError("email already exists",409);
        }

        const hashedPassword =await bcrypt.hash(password,10);

        const user = await userRepository.create({
            name,
            email,
            password: hashedPassword
        });

        return await userRepository.save(user);
    }

    /**
     * It performs the login operation.
     * @param {string} email - email user
     * @param {string} password - password user 
     * @returns {Promise<{token:string}>} - Returns the authentication token.
     */
    async   login(
        email:string,
        password:string
    ){
    const user= await userRepository.findOne({
        where:{
            email
        }
    });

    if (!user){
        throw new AppError("invalid email or password",401);
    }
     const isPasswordValid=await bcrypt.compare(
        password,
        user.password
     );
     if (!isPasswordValid){
        throw new AppError("Invalid email or password",401);
     }

     const token =jwt.sign({
        userId:user.id,
        role:user.role
     },
     process.env.JWT_SECRET as string,
     {
        expiresIn:"1d"
     }
    );
    return{token};
    }

    /**
     * It performs the OTP operation.
     * @param {string} email - email user
     * @param {string} otp - otp cod 
     * @returns {Promise<{message:string,email:string}>}
     */
    async verifyOtp(
        email:string,
        otp:string
    ){
        if (otp !=="123456"){
            throw new AppError("Invalid OTP",401);
        } 
        return{
            message:"OTP verified successfully",
            email
        };
    }

}
