import { 
    Entity,PrimaryGeneratedColumn,OneToOne,JoinColumn,OneToMany

 } from "typeorm";

 import { User } from "./User";
import { CartItem } from "./CartItem";

@Entity()
export class Cart{

    @PrimaryGeneratedColumn()
    id!:number;

    @OneToOne(()=>User,user=>user.cart)
    @JoinColumn()
    user!:User;

    @OneToMany(()=>CartItem,cartItem => cartItem.cart)
    items!:CartItem[];
}