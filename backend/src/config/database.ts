import mongoose from "mongoose";

export const ConnectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("MongoDB Connected Succesfully")
    } catch (error) {
         console.log("MongoDB error:",error)
       process.exit(1) //exit with failure 
                      //1 failure 0 success 
    }
}