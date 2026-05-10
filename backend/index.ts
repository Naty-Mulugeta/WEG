import app from "./src/app";
import { ConnectDB } from "./src/config/database";

import dns from "node:dns/promises"
dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

const PORT=process.env.PORT || 3000

ConnectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server is running on:${PORT}`)
})
})