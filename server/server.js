import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/mongodb.js'
import userRoutes from './routes/userRoutes.js'


// App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Initialize Middlewares
app.use(cors())

// Routes Middlewares
app.use('/api/user',userRoutes)

app.use(express.json())

// Api Routes
app.get('/',(req,res)=>{
    res.send('api working')
})


// Server listening
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

export default app