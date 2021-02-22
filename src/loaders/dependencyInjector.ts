import { Container } from "typedi";
import LoggerInstance from "./logger";
import agendaFactory from "./agenda";
import mongoose from "mongoose";
export default ({ mongoConnection, models }: { mongoConnection: mongoose.Connection; models: { name: string; model: any }[] }) => {
    try {
        models.forEach(model => {
            Container.set(model.name, model.model);
        });

        const agendaInstance = agendaFactory({ mongoConnection });
        Container.set('agendaInstance', agendaInstance);
        Container.set('logger', LoggerInstance);

        LoggerInstance.info('Agenda Injected into Conatiner');

        return { agenda: agendaInstance };
    } catch (err) {
        LoggerInstance.error(`Error on dependency injector loader : ${err}`);
        throw err;
    }
}