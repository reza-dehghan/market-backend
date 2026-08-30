import { Request, Response } from "express";
import { CartService } from "../services/cart.service";

export class CartController {

    private cartService = new CartService();

    async getCart(
        req: Request,
        res: Response
    ) {

        const userId = Number(req.query.userId);

        const cart =
            await this.cartService.getCartByUserId(userId);

        return res.status(200).json(cart);
    }

    async addItem(req:Request,res:Response){
        const{userId,productId,quantity}=req.body;

        const cartItem =await this.cartService.addItem(
            userId,productId,quantity
        );

        return res.status(200).json(cartItem);
    };

    async updateItem(req:Request,res:Response){

        const {id}=req.params;
        const {quantity}=req.body;

        const cartItem=await this.cartService.updateItem(
            Number(id),
            quantity
        );

        return res.status(200).json(cartItem);
    }

    async deleteItem(req:Request,res:Response){

        const {id}=req.params;

        const deleteItem=await this.cartService.deleteItem(
            Number(id)
        )
        return res.status(200).json(deleteItem);
    }

}