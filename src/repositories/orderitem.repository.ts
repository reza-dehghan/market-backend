import { AppDataSource } from "../config/database";
import { OrderItem } from "../entities/OrderItem";

export const orderItemRepository=
    AppDataSource.getRepository(OrderItem);