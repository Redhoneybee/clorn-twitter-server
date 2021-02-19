import express from "express";
import path from "path";

const app: express.Express = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    res.send('first start');
});

export default app;