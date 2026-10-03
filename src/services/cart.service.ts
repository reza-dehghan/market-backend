import { cartRepository } from "../repositories/cart.repository";
import { productRepository } from "../repositories/product.repository";
import { cartItemRepository } from "../repositories/cartItem.repository";
import { AppError } from "../utils/AppError";
import { Cart } from "../entities/Cart";
export class CartService {

    /**
     * It retrieves the user's shopping cart using the user ID.
     * @param {number} userId -  id of user
     * @returns {Promise<Cart| null>}
     */
    async getCartByUserId(userId: number) {

        const cart = await cartRepository.findOne({
            where: {
                user: {
                    id: userId
                }
            },
            relations: {
                items: {
                    product: true
                }
            }
        });

        return cart;
    }

    /**
     * add item to cart 
     * @param {number} userId - id of user 
     * @param  {number} productId - id of product
     * @param {number} quantity - quantity of product
     * @returns 
     */
    async addItem(
        userId: number,
        productId: number,
        quantity: number
    ) {

        const cart = await cartRepository.findOne({
            where: {
                user: {
                    id: userId
                }
            }
        });

        if (!cart) {
            throw new AppError("Cart not found",404);
        }


        const product = await productRepository.findOne({
            where: {
                id: productId
            }
        });

        if (!product) {
            throw new AppError("Product not found",404);
        }


        const cartItems = await cartItemRepository.find({
            where: {
                cart: {
                    id: cart.id
                }
            },
            relations: {
                product: true
            }
        });


        const existingItem = cartItems.find(
            item => item.product.id === product.id
        );


        if (existingItem) {

            existingItem.quantity += quantity;

            return await cartItemRepository.save(existingItem);
        }


        const cartItem = cartItemRepository.create({
            cart,
            product,
            quantity
        });

        return await cartItemRepository.save(cartItem);
    }

    async updateItem(itemId:number,quantity:number){

        const cartItem = await cartItemRepository.findOne({
            where:{
                id:itemId
            },
            relations:{
                product:true
            }
        });
        if (!cartItem){
            throw new AppError("cart item not found",404);
        }

        cartItem.quantity = quantity;
        return await cartItemRepository.save(cartItem);
    }

    async deleteItem(itemId:number){

        const deleteItem = await cartItemRepository.findOne({

            where:{
                id:itemId
            }
        });
        if (!deleteItem){
            throw new AppError("cart item not found",404);
        }
        await cartItemRepository.remove(deleteItem);
        return{
            message:("cart item remove successfuly")
        }
    }

}