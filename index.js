import express, { urlencoded } from "express";
import mongoose from "mongoose";
import env from "dotenv"
import routes from "./Routes/routes.js";

env.config()
const app = express();
app.use(express.json());//middlewares


const mongoUrl = process.env.MONGO_URL;
const connect = async () => {
    try {
        await mongoose.connect(mongoUrl);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } 
};
connect(); 

app.use("/", routes); 

app.listen(8080, () => {
    console.log("Server started on port 8080");
});





