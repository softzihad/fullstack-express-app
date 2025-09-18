import express from "express";

const app = express();

//app.use(express.static('public/1st-template'));
app.use(express.static('public/2nd-template'));

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

export default app;