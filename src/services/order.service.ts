import { OrderItem } from "../entities/OrderItem";
import { cartRepository } from "../repositories/cart.repository";
import { cartItemRepository } from "../repositories/cartItem.repository";
import { orderRepository } from "../repositories/order.repository";
import { orderItemRepository } from "../repositories/orderitem.repository";
import { AppError } from "../utils/AppError";


export class orderService{

    async createOrder(userId:number){

        const cart = await cartRepository.findOne({
            where:{
                user:{id:userId} 
            },
            relations:{
                items:{
                    product:true
                }
            }
        });

        if (!cart){
            throw new AppError("cartt not found",404);
        }

        if (cart.items.length === 0){
            throw new AppError("Cart is empty",400);
        }

        let totalPrice = 0;

        for (const item of cart.items){
            totalPrice += Number(item.product.price)* item.quantity; 

        }

        const order =orderRepository.create({
            user:{id:userId},
            totalPrice,
            });
            const saveOrder = await orderRepository.save(order);

        for(const item of cart.items){

            const orderItem =orderItemRepository.create({

                order:saveOrder,
                product:item.product,
                quantity:item.quantity,
                price:item.product.price

            });

            await orderItemRepository.save(orderItem);

            cart.items=[];

            await cartRepository.save(cart);
            return saveOrder;
            
        }
    }

    async getOrders(userId:number){

        const orders = orderRepository.find({
            where:{
                user:{id:userId}
            },
            relations:{
                items:{
                    product:true
                }
            }
        });

        return orders;

    }

    async getOrderById(userId:number){

        const order = await orderRepository.findOne({

            where:{
                user:{
                    id:userId
                }
            },
            relations:{
                items:{
                    product:true
                }
            }


        });
        if (!order){
            throw new AppError("order not found",404);

        }

        return order;
    }

    async getAllOrders(){

        const orders=await orderRepository.find({
            relations:{
                items:{
                    product:true
                },
                user:true
            }
        });

    console.log(JSON.stringify(orders, null, 2));
        return orders;
    }
}