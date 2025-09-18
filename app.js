import express from "express";
import productsRouter from './routes/products.js';

const app = express();

//app.use(express.static('public/1st-template'));
app.use(express.static('public/2nd-template'));
app.use('/api/products', productsRouter);
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

export default app;