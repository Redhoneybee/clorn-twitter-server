import dotenv from "dotenv";

const isFound = dotenv.config();

if (isFound.error) {
    throw new Error('Not found dotenv file');
}

// development set
process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
    port: process.env.PORT || 5000
}