// initialize app
const express = require("express");
const app = express();

// required imports
const cors = require("cors");
const search = require("./api/Search.js");

// enable CORS middleware
app.use(cors());

// API routes
app.get("/api/search/:type", search);

// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
