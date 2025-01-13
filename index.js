require("dotenv").config();
const connectDB = require("./src/db/index.js");
const app = require("./app");

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 1000, () => {
            console.log(`App listening on port ${process.env.PORT || 1000}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB Connection ERROR:", error);
    });
