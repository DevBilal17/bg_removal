import mongoose, { connect } from "mongoose";

export const connectDB = async ()=> {
    
    mongoose.connection.on('connected',()=>{
        console.log(`Mongo db connected`)
    })

    await connect(process.env.MONGODB_URI,{
        dbName:'BG_Removal'
    })
}