import dotenv from "dotenv";

const isFound = dotenv.config();

if (isFound.error) {
    throw new Error('Not found dotenv file');
}

// development set
process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
    // server port
    port: process.env.PORT || 5000,


    // mongo db url
    db_url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ufpl1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,


    // logs
    logs: {
        level: process.env.LOG_LEVEL || "silly"
    },


    // agenda
    agenda: {
        collection: process.env.AGENDA_DB_COLLECTION,
        time: "3 minutes",
        concurrency: 10
    }
}