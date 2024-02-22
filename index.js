import express, { urlencoded } from "express";
import mongoose from "mongoose";
import env from "dotenv"
import routes from "./Routes/routes.js";
import postRoutes from "./Routes/postRoutes.js";

env.config()
const app = express();

// Middlewares
app.use(express.json());

const mongoUrl = process.env.MONGO_URL;
// const connect = async () => {
//     try {
//         await mongoose.connect(mongoUrl);
//         console.log("Connected to MongoDB.");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     } 
// };
// connect(); 


//With self calling function-- called immediate invoke function
(async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();


app.use("/", routes); 
app.use("/", postRoutes);


app.listen(8080, () => {
    console.log("Server started on port 8080");
});





