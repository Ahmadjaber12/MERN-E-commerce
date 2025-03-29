import express from "express"
import {  connection } from "./Config/DB.js";
import * as dotenv from "dotenv"
import cors from "cors"
import productRouter from "./Product/Product.Router.js";
import path from 'path'
dotenv.config()

const app=express()
const PORT=4000;
const __dirname=path.resolve();
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
})); 
app.use(express.json());
app.use(productRouter);
app.use(express.static(path.join(__dirname,"/Frontend/dist")))
    
        app.get("*",(req,res)=>{ 
        res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"))
    })

app.listen(PORT,()=>
    {   connection();
        console.log(`Server is listening on Port ${PORT}`)
    });
