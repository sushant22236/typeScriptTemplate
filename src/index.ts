import express from "express";
import type { Express } from "express";
import { PORT } from "./config/env.js";

const app: Express = express();

app.get('/ping', (req, res) => {
    res.send("pong")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})





