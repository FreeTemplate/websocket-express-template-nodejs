const express = require("express");
const bodyParser = require("body-parser").json();
const router = express.Router();

/**
 * This module provides API route examples for users of the template.
 * It demonstrates handling of POST and GET requests under the /api path.
 * @module api
 */

/**
 * Handles POST requests to the /api/post endpoint.
 * Parses incoming request body using the JSON body-parser middleware.
 * Logs the parsed request body and responds with a success status.
 * 
 * @name POST /api/post Endpoint
 * @path {POST} /post
 * @body {Object} req.body - The parsed request body.
 * @response {Object} - A response object containing a success status.
 */
router.post("/post", bodyParser, async (req, res) => {
    console.log(req.body);  // Log the parsed request body
    res.send({ success: 1 });  // Respond with a success status
});

/**
 * Handles GET requests to the /api/get endpoint.
 * Though it's uncommon to use a body parser for GET requests (since they usually don't have bodies),
 * this is included here as an example.
 * Logs the parsed request body (if any) and responds with a success status.
 * 
 * @name GET /api/get Endpoint
 * @path {GET} /get
 * @body {Object} [req.body] - The parsed request body (optional).
 * @response {Object} - A response object containing a success status.
 */
router.get("/get", bodyParser, async (req, res) => {
    console.log(req.body);  // Log the parsed request body (if any)
    res.send({ success: 1 });  // Respond with a success status
});

// Export the router for use in other modules
module.exports = router;
