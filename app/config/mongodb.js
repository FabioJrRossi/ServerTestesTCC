// Imports environment variables and mongoose library.
require("dotenv").config();
const mongoose = require("mongoose");

// Variables for database connection, loaded from environment(dotenv) variables.
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const url = `mongodb+srv://${dbUser}:${dbPass}${dbHost}${dbName}?retryWrites=true&w=majority`;

// Creating database connection.
mongoose.Promise = global.Promise;
mongoConnect = () => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
        })
        .then(() => {
            console.log("Successfully connected to the database!");
        })
        .catch((err) => {
            console.log("Could not connect to the database. Error...", err);
        process.exit();
  });
}

// Exporting the connection function.
module.exports = mongoConnect();