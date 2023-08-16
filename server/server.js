import express from 'express'
import route from './Routes/studentRoutes.js'
import cors from "cors"
import dotenv from 'dotenv'
import conn from './Database/conn.js'

const app=express()
app.use(express.json())
app.use(cors())
dotenv.config()
app.use("/api",route)

conn().then(()=>{
    app.listen(4000,()=>{
        console.log("Server Started")
    })
}).catch(err=>{
    console.log(err)
})

