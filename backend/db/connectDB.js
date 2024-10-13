import mongoose from "mongoose";

const connectDB = async()=>{
    try {
     const connectionInstance =  await mongoose.connect("mongodb+srv://bhartiaditya685:7488124542@cluster0.obvvnt5.mongodb.net/e-commerce")
     console.log(`\n MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("MONGODB Connection error !! ",error)
        process.exit(1)
    }
}

export default connectDB