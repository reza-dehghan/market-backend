import{
    Entity,PrimaryGeneratedColumn,Column,ManyToOne
} from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderItem {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({
        type:"integer"
    })
    quantity!:number;

    @Column({
        type:"decimal"
})
    price!:number;

    @ManyToOne(() => Order, order => order.items)
    order!: Order;

    @ManyToOne(() => Product)
    product!: Product;
};