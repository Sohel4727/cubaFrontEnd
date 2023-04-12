import * as dotenv from 'dotenv'
import connectDB from './DB/connectionDB'
import express from "express"
import bodyParser from "body-parser"
import cors from 'cors'
dotenv.config();
const app=express();



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true }))
app.use(cors())


// for establish DATA BASE connection

const db_url = process.env.DB_URL;
const db_name = process.env.DB_NAME;
const portnumber = process.env.PORT_NUMBER
connectDB(db_url, db_name)

app.listen(PORT,()=>{
    `server started at port ${PORT}`
})