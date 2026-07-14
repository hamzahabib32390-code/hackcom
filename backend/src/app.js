import express from 'express';
import device_route from './routes/client.js';
import auth from './routes/auth.js';
import cors from "cors"
const app = express();

// Use Express's built-in body parsing engines
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(device_route);
app.use(auth);


export default app;