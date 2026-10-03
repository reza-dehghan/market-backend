import bcrypt from "bcrypt"
import { userRepository } from "../repositories/user.repository";
import { User } from "../entities/User";

export class Userservice{
 
    /**
Creates a new user and hashes the password before saving it.     * @param {string} name - name of user 
     * @param {string} email - email of user 
     * @param {string} password - password of user 
     * @returns {Promise<User>}
     */
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