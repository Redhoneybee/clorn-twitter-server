import app from "../index";
import config from "../config/index";
import { createServer } from "http";

const server = createServer(app);

server.listen(config.port, () => {
    console.log(`listen...${config.port}`);
})