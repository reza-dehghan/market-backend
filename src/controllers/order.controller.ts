import { Request, Response } from "express";
import { orderService } from "../services/order.service";

export class orderController{

private orderService = new orderService();

    async createOrder(req:Request,res:Response){
        const {userId} = req.body;

        const order = await this.orderService.createOrder(userId);

        return res.status(201).json(order);

    }

    async getOrders(req:Request,res:Response){

        const {userId}=req.query;

        const orders = await this.orderService.getOrders(Number(userId));

        return res.status(200).json(orders);
    }

    async getOrderById(req:Request,res:Response){

        const {id}=req.params;
        const order=await this.orderService.getOrderById(Number(id));
        return res.status(200).json(order);
    }

    async getAllOrders(req:Request,res:Response){
        const orders= await this.orderService.getAllOrders();
        return res.status(200).json(orders);
    }


}