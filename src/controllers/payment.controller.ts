import { Request,Response } from "express";
import { PaymentService } from "../services/payment.service";

export class PaymentController{

    private paymentservice= new PaymentService();

    async pay(req:Request,res:Response){

        const {orderId}=req.body;
        const payment= await this.paymentservice.pay(Number(orderId));

        return res.status(200).json(payment);

    }
}