import express from "express";
import userRouter from"./routes/user.js";
import taskRouter from"./routes/task.js";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"

export const app=express();

config({
    path:"./data/config.env",
});



app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTED_URL],
    methods:["GET","POST","PUt","DELETE"],
    Credentials:true,
}))

//using routes
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter);



app.get("/",(req,res)=>{
    res.send("Nice working")
});

//using error middleware
app.use(errorMiddleware);