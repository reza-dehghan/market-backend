import{Entity, PrimaryGeneratedColumn, Column, OneToMany,ManyToOne,CreateDateColumn} from "typeorm";
import { OrderItem } from "./OrderItem";
import { User } from "./User";


@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column({
        type:"decimal"
    })
    totalPrice!:number;

    @CreateDateColumn()
        createdAt!: Date;

    @OneToMany(()=>OrderItem,orderItem => orderItem.order)
    items!:OrderItem[];

    @ManyToOne(()=> User,user => user.orders)
    user!:User;
};

