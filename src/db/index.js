const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            console.error("Error: MONGODB_URI is not defined in the .env file.");
            process.exit(1);
        }

        const conn = await mongoose.connect(uri, {});

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        console.error(`Stack Trace: ${error.stack}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
