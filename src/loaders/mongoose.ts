import mongoose from "mongoose";
import config from "../config/index";

export default async function () {
    try {
        const connection = await mongoose.connect(config.db_url, {
            useCreateIndex: true,
            useFindAndModify: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "clone_twitter_testDB"
        });

        console.log("Successed mongo connect");

        return connection.connection;

    } catch (err) {
        throw new Error("mongoose error");
    }
}