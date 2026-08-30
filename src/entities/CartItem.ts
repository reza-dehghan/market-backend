import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne
} from "typeorm";
import { Product } from "./Product";
import { Cart } from "./Cart";

@Entity()

export class CartItem{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type:"integer"
    })
    quantity!: number;

    @ManyToOne(() => Cart, cart => cart.items)
    cart!: Cart;

    @ManyToOne(() => Product)
    product!: Product;

};