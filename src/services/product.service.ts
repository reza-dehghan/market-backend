import {productRepository} from "../repositories/product.repository";
import { AppError } from "../utils/AppError";

export class ProductService {

    async getAllProducts(){
        const products = await productRepository.find();
        return products;
    }

    async getProductById(id:number){
        const product=await productRepository.findOne({
            where:{id}
        });

        if (!product){
            throw new AppError("product not founnd",404);
        }
        return product
    }

    async createProducts(
      name:string,
      price:number,
      stock:number,
      description:string
    ){
        const product=productRepository.create({
            name,
            price,
            stock,
            description
        });

        return await productRepository.save(product);
    }

    async deleteProduct(id:number){
        const product= await productRepository.findOne({
            where:{id}
        });

        if(!product){
            throw new AppError("product not found",404);
        }
         await productRepository.remove(product);

         return{
            message:"Product deleted successfully"
         };

    }


    
};