import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToOne,
    OneToMany
} from "typeorm";
import { Cart } from "./Cart";
import { Order } from "./Order";


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;


    @Column({
        type: "varchar"
    })
    name!: string;


    @Column({
        type: "varchar",
        unique: true
    })
    email!: string;


    @Column({
        type: "varchar"
    })
    password!: string;


    @Column({
        type: "varchar",
        default: "user"
    })
    role!: string;


    @CreateDateColumn()
    createdAt!: Date;

    @OneToOne(() => Cart,cart => cart.user)
    cart!: Cart;
    @OneToMany(()=>Order,order=> order.user)
    orders!:Order[]
}