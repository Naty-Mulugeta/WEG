import mongoose from "mongoose";

export const ConnectDB = async () => {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        throw new Error("MONGO_URI is not set");
    }
    try {
        await mongoose.connect(mongoUri)
        console.log("MongoDB Connected Succesfully")
    } catch (error) {
        console.log("MongoDB error:", error)
        process.exit(1) //exit with failure 
        //1 failure 0 success 
    }
}