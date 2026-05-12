import express from "express"
import authRoutes from "./routes/authRoutes"
import chatRoutes from "./routes/chatRoutes"
import messageRoutes from "./routes/messageRoutes"
import userRoutes from "./routes/userRoutes"
import { clerkMiddleware } from '@clerk/express'
import { errorHandler } from "./middleware/errorHandler"

const app =express() 

app.use(express.json())

app.use(clerkMiddleware())

app.get("/health",(req,res)=>{
    res.json({status:"ok",message:"Server is running"})
})

app.use("/api/auth",authRoutes)
app.use("/api/chat",chatRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/user",userRoutes)

// error handlers must come after all the routes and other middlewares so they
// can catch errors passed with next(err) or thrown inside async handlers.
app.use(errorHandler);

export default app