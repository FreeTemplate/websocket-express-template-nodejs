"use strict";  // Use "strict mode" for safer JavaScript execution

// Import necessary modules and libraries
const express = require("express");  // Import the Express framework
const { createServer } = require("http");  // Import the createServer function from the http module
const app = express();  // Create a new Express application
const WSServer = require("./Websocket/WSServer");  // Import the WebSocket server
const config = require("./Config/config.json");  // Import the configuration file

// Middleware settings for request body parsing
app.use(express.json());  // Parse request bodies in JSON format
app.use(express.urlencoded({ extended: false }));  // Parse URL-encoded request bodies

// Set up static file path and CORS
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  // Allow requests from all origins
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  // Specify allowed request headers
    next();  // Proceed to the next middleware or route handler
});
app.use(express.static("public"));  // Serve static files

// Route settings
const MainRouter = require("./Route/main");  // Main route
const ApiRouter = require("./Route/api");  // API route
app.use("/", MainRouter);  // Set the path prefix for the main route
app.use("/api", ApiRouter);  // Set the path prefix for the API route

// Create an HTTP server
const server = createServer(app);

// Retrieve server port from configuration file
const PORT = config.PORT;

// Start the server
server.listen(PORT, () => {
    console.log(`WebSocketServer listening on port ${PORT}`);  // Output server startup information
});

// Create a WebSocket server instance
const webSocketServer = new WSServer(server);
