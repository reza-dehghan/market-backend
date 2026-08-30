import "reflect-metadata";
import { AppDataSource } from "./config/database";
import { Product } from "./entities/Product";

async function testDatabase() {
    try {
        await AppDataSource.initialize();

        console.log("Database connected successfully");

        const productRepository =
            AppDataSource.getRepository(Product);

        const product = productRepository.create({
            name: "Test Product",
            price: 100,
            stock: 10,
            description: "Test product for database"
        });

        await productRepository.save(product);

        console.log("Product created successfully");

        const products = await productRepository.find();

        console.log("Products:", products);

    } catch (error) {
        console.error("Database test failed:", error);
    } finally {
        if (AppDataSource.isInitialized) {
            await AppDataSource.destroy();
        }
    }
}

testDatabase();