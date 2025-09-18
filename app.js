import express from "express";

const app = express();

app.use(express.static('public/1st-template'));

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

export default app;