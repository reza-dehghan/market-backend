import bcrypt from "bcrypt"
import { userRepository } from "../repositories/user.repository";

export class Userservice{

    async createUSer(
        name:string,
        email:string,
        password:string
    ){

        const hashedPassword = await bcrypt.hash(password,10);

        const user = userRepository.create({
            name,
            email,
            password:hashedPassword

        });

        return await userRepository.save(user);
    }
}