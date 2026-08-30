import express from "express";
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes"
import cartRoutes from "./routes/cart.routes"
import orderRoutes from "./routes/order.routes"
import paymentRoter from "./routes/payment.routes"
import { errorHandler } from "./middleware/error.middleware";

const app =express();

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/products",productRoutes);

app.use("/cart",cartRoutes);

app.use("/orders",orderRoutes)

app.use("/payments",paymentRoter)

app.use(errorHandler);


export default app;