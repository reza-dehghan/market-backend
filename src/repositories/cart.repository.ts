import {AppDataSource} from "../config/database";
import {Cart} from "../entities/Cart";

export const cartRepository = 
    AppDataSource.getRepository(Cart);

