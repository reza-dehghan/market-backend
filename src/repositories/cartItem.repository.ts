import { AppDataSource } from "../config/database";
import { CartItem } from "../entities/CartItem";

export const cartItemRepository=
    AppDataSource.getRepository(CartItem);