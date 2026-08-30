import "reflect-metadata";

import app from "./app";
import { AppDataSource } from "./config/database";


const PORT = 3000;


AppDataSource.initialize()
.then(() => {

    console.log("Database connected successfully");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

})
.catch((error) => {

    console.log("Database connection failed");
    console.log(error);

});