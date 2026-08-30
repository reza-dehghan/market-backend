import{AppDataSource} from "../config/database";
import {Order} from "../entities/Order";

export const orderRepository=
    AppDataSource.getRepository(Order);