import { orderItemRepository } from "../repositories/orderitem.repository";
import { AppError } from "../utils/AppError";

export class PaymentService {

    async pay(orderId: number) {

        const order = await orderItemRepository.findOne({
            where:{
                id:orderId
            }
        });
        if (!order){
            throw new AppError("order not found",404);
        }

        const success = Math.random() > 0.3;

        if (success) {
            return {
                orderId,
                status: "success",
                message: "Payment successful"
            };
        }

        return {
            orderId,
            status: "failed",
            message: "Payment failed. Please retry."
        };
    }
}