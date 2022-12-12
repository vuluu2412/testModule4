import express from "express";
import mongoose from "mongoose";
import {router} from "./src/router/router";
import cors from "cors";
const DB_URL = "mongodb://127.0.0.1:27017/laptop";
mongoose.connect(DB_URL).then(()=>{
    console.log('Db connected')
})
const app = express();
app.use(cors());
app.use(express.json());
app.use('',router);
app.listen(3001,()=>{
    console.log('Server is running')
})