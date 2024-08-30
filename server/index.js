import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import fs from "fs"


dotenv.config()


//My dev imports
import router from "./routes/Router.js";
import { configAllDb } from "./config/config.allDB.js";

const app = express();

app.use(cookieParser())
app.use(cors());
app.use(express.json());

app.use(router)

configAllDb()


const startApp = async () => {
    try{
       
        // console.log(readJSONdb)
        app.listen(process.env.PORT, () => console.log("Server starting!"));
    } catch(err) {
        console.log("Возникла ошибка!", err)
    }
}

startApp()