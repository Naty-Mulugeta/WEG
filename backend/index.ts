import app from "./src/app";
import { ConnectDB } from "./src/config/database";
import {createServer} from "http"
import { initializeSocket } from "./src/utils/socket";

import dns from "node:dns/promises"

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const PORT=process.env.PORT || 3000

const httpServer=createServer(app)

initializeSocket(httpServer)

ConnectDB().then(()=>{
    httpServer.listen(PORT,()=>{
    console.log(`Server is running on:${PORT}`)
})
})
.catch((error)=>{
    console.error("Failed to start server",error)
    process.exit(1)
})

