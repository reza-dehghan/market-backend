import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { asyncHandler } from "../middleware/asyncHandler";
import { authMiddleware } from "../middleware/authmiddleware";
import { adminMiddleware } from "../middleware/adminMiddlware";


const router = Router();

const productController = new ProductController();

router.get(
    "/",
    asyncHandler((req, res) =>
        productController.getAllProducts(req, res)
    )
);

router.get("/:id",
    asyncHandler((req,res)=>
    productController.getProductById(req,res)
  )
);

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    asyncHandler((req,res)=>
        productController.createProduct(req,res)
    )

);

router.delete("/:id",
    authMiddleware,
    adminMiddleware,
    asyncHandler((req,res)=>
        productController.deleteProduct(req,res)
    
    )
);



export default router;