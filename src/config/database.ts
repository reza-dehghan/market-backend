import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/User";
import { Product } from "../entities/Product";
import { Cart } from "../entities/Cart";
import { CartItem } from "../entities/CartItem";
import { Order } from "../entities/Order";
import { OrderItem } from "../entities/OrderItem";

dotenv.config();

export const AppDataSource = new DataSource({

    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [User,Product,Cart,CartItem,Order,OrderItem],
    migrations: ["src/migrations/*.ts"],
});