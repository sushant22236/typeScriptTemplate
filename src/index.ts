import express from "express";
import type { Express } from "express";
import { PORT } from "./config/env";
import pingRouter from "./routes/ping.route";

const app: Express = express();

app.get('/health', (req, res) => {
    res.send('ok')
})

app.use('/api', pingRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});






