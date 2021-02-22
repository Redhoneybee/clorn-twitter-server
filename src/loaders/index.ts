import express from "express";
import mongooseLoader from "./mongoose";
import dependencyInjectorLoader from "./dependencyInjector";
import expressLoader from "./express";
import Logger from "./logger";
import mongoose from "mongoose";

export default async ({ app }: { app: express.Application }) => {
    const mongoConnection: mongoose.Connection = await mongooseLoader();
    Logger.info('DB loaded and Connected');

    const userModel = {
        name: 'userModel',
        model: require('../models/User').default
    };

    const { agenda } = await dependencyInjectorLoader({
        mongoConnection,
        models: [
            userModel
        ]
    });

    Logger.info('Dependency Injector loaded');

    await expressLoader({ app });
    Logger.info('Express load');
}