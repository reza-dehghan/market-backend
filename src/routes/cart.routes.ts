import { Router } from "express";
import { CartController } from "../controllers/cart.controller";
import { asyncHandler } from "../middleware/asyncHandler";

const router = Router();

const cartController = new CartController();

router.get(
    "/",
    asyncHandler((req, res) =>
        cartController.getCart(req, res)
    )
);

router.post(
    "/items",
    asyncHandler((req, res) =>
        cartController.addItem(req, res)
    )
);

router.patch("/items/:id",
    asyncHandler((req,res)=>
        cartController.updateItem(req,res)
    
    )

);

router.delete("/items/:id",
    asyncHandler((req,res)=>
        cartController.deleteItem(req,res)
    )
);

export default router;