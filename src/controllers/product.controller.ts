import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {

    private productService = new ProductService();

    async getAllProducts(
        req: Request,
        res: Response
    ) {
        const products =
            await this.productService.getAllProducts();

        return res.status(200).json(products);
    }

    async getProductById(req:Request,res:Response){
        const id = Number(req.params.id);
        const product=await this.productService.getProductById(id)

        return res.status(200).json({product})
    }

    async createProduct(req:Request,res:Response){
        const{name,price,stock,description}=req.body;

        const product=
        await this.productService.createProducts(name,price,stock,description);
        return res.status(201).json(product);
    }

    async deleteProduct(
        req:Request,
        res:Response
    ){
        const id =Number(req.params.id);

        const result = await this.productService.deleteProduct(id);

        return res.status(200).json(result);
    }
}