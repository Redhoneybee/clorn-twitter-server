import express from "express";
import cors from "cors";

const app: express.Express = express();

app.use(cors());
app.use(express.json());

app.use('/', (req, res, next) => {
    res.send('first start');
});

export default app;