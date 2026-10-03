import { Product } from "../entities/Product";
import {productRepository} from "../repositories/product.repository";
import { AppError } from "../utils/AppError";

export class ProductService {

    /**
     * Retrieves all products..
     * @returns {Promise<Product[]>}
     */
    async getAllProducts(){
        const products = await productRepository.find();
        return products;
    }


/**
 * It retrieves the product using the requested ID number.
 * @param {number} id - productId
 * @returns {Promise<Product>}
 */
    async getProductById(id:number){
        const product=await productRepository.findOne({
            where:{id}
        });

        if (!product){
            throw new AppError("product not founnd",404);
        }
        return product
    }


    /**
     * create a new product.
     * @param {string} name - name of user
     * @param {number} price - pric of product
     * @param {number} stock - stock of product
     * @param {string} description - description of product
     * @returns {Promise<Product>}
     */
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


        /**
         * Deletes a product.
         * @param {number} id - productID
         * @returns {Promise<{message:string}>}
         */
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