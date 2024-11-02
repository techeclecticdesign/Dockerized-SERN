import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = Number(process.env.BACKEND_PORT) || 3000;

app.listen(port, "0.0.0.0", () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
