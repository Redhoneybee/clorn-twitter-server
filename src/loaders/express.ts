import express from "express";
import cors from "cors";

export default ({ app }: { app: express.Application }) => {

    app.use(cors());
    app.use(express.json());

    app.use('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send('first start');
    });

    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
        if (err.name === "UnauthorizedError") {
            return res
                .status(err.status)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    });

    app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message
            }
        })
    });
}