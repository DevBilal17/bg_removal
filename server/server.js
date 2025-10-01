import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/mongodb.js'


// App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Initialize Middlewares
app.use(express.json())
app.use(cors())


// Api Routes
app.get('/',(req,res)=>{
    res.send('api working')
})


// Server listening
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})