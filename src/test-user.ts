import "reflect-metadata";
import { AppDataSource } from "./config/database";
import {userRepository} from "./repositories/user.repository";

async function testUserRepository() {
    
        await AppDataSource.initialize();
        console.log("Database connected successfully");

        const newUser = userRepository.create({
            name: "John Doe",
            email: "john.doe2@example.com",
            password: "123456",
        });

        await userRepository.save(newUser);
        console.log("User created successfully");
    }

    testUserRepository()
