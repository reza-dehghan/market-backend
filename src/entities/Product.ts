import{
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
}from "typeorm"

@Entity()
export class Product{

    @PrimaryGeneratedColumn()
    id!:number;

    @Column({
        type:"varchar"
    })
    name!:string;

    @Column({
        type:"decimal"
    })
    price!:number;

    @Column({
        type:"integer"
    })
    stock!:number;

    @Column({
        type:"varchar"
    })

    description!:string;

    @CreateDateColumn()
    createdAt!: Date;
}