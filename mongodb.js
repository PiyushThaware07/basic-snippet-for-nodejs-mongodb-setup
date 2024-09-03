const mongoose = require("mongoose");

const dbName = "airtribe";
const dbURL = `mongodb://localhost:27017/${dbName}`;

async function dbConnection() {
    try {
        mongoose.connect(dbURL);
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log(`~> Successfully connected to the database: ${dbName}`);
        });
        connection.on('error', (err) => {
            console.error('~> Database connection error: ', err.message);
        });
        connection.on('disconnected', () => {
            console.log('~> Database connection disconnected');
        });
    }
    catch (error) {
        console.error('~> Database connection failed : ', error.message);
    }
}

module.exports = dbConnection;