import { AppDataSource } from "../config/database";
import { Product } from "../entities/Product";

export const productRepository =
    AppDataSource.getRepository(Product);
    ''