const express = require("express");
const cors = require("cors");
const morgan = require("morgan"); // For logging HTTP requests
const helmet = require("helmet"); // For enhanced security
require("dotenv").config(); // Load environment variables from .env file

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add HTTP request logger
app.use(morgan("dev")); // Log HTTP requests in 'dev' format

// Add security headers
app.use(helmet());

// CORS configuration
app.use(
    cors({
        origin: [process.env.CORS_ORIGIN || "http://localhost:5173"], // Use environment variable or default origin
        credentials: true, // Allow cookies in cross-origin requests
    })
);

// Routes
const productsRouter = require("./src/routes/products.route");
const registerRouter = require("./src/routes/register.router");
const cartRouter = require("./src/routes/cart.route");
const orderRouter = require("./src/routes/order.route");
app.use("/products", productsRouter);
app.use("/register", registerRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
// Handle unknown routes
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({ message: "Something went wrong!" });
});

// Export the app for use in a separate server file
module.exports = app;
