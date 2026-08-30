import { orderController } from "../controllers/order.controller";
import { asyncHandler } from "../middleware/asyncHandler";
import { Router } from "express";
import { authMiddleware } from "../middleware/authmiddleware";
import { adminMiddleware } from "../middleware/adminMiddlware";

const router = Router();

const ordercontroller = new orderController()

router.post("/",
    authMiddleware,
    asyncHandler((req,res)=>
    ordercontroller.createOrder(req,res))
);

router.get("/",
    authMiddleware,
    asyncHandler((req,res)=>
    ordercontroller.getOrders(req,res)
)
);

router.get("/:id",
    asyncHandler((req,res)=>
    ordercontroller.getOrderById(req,res)
)
);

router.get("/admin/orders",
    authMiddleware,
    adminMiddleware,
    asyncHandler((req,res)=>
    ordercontroller.getAllOrders(req,res)
)
);

export default router;