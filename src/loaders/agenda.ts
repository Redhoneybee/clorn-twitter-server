import Agenda from "agenda";
import mongoose from "mongoose";
import config from "../config/index";

export default ({ mongoConnection }: { mongoConnection: mongoose.Connection }) => {
    return new Agenda({
        mongo: mongoConnection.db,
        db: { collection: config.agenda.collection },
        processEvery: config.agenda.time,
        maxConcurrency: config.agenda.concurrency
    });
}