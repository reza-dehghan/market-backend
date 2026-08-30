import { Router } from "express";
import { PaymentController } from "../controllers/payment.controller";
import { asyncHandler } from "../middleware/asyncHandler";

const router=Router();

const paymentController=new PaymentController();


router.post("/",
    asyncHandler((req,res)=>
    paymentController.pay(req,res)
));

export default router;