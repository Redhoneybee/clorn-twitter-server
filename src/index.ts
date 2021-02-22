import express from "express";
const app: express.Express = express();

(async function () {
    await require('./loaders/index').default({ app });
})();
export default app;