import express from "express";
import CrudRouter from './Controller/Routes.js'
import { testConnection } from "./Database/db.js";
const app = express();

import cors from 'cors';
app.use(cors());

app.use(express.json())



app.get("/",(req,res)=>{
    console.log("We are live");
    console.log("we are live!!!")
    return res.json({messgage:"HEllo world"});
});

app.use('/TJ',CrudRouter);


app.listen(8080,()=>{
    console.log("Backend Started");
});


testConnection();

