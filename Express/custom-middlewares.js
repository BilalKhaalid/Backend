const express = require("express");
const app = express();

// Custom middleware to log requests
const logRequests = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] ${req.method} request to ${req.url}`
  );
  next(); // Pass control to the next middleware or route handler
};

// Use the custom middleware for all routes
app.use(logRequests);

// Middleware for a specific route
const authenticate = (req, res, next) => {
  // Check authentication logic here
  // For simplicity, let's assume authentication is successful
  console.log("User authenticated!");
  next();
};

// Applying middleware selectively for the '/secure' route
app.get("/secure", logRequests, authenticate, (req, res) => {
  res.send("This is a secure route!");
});

// Another route without specific middleware
app.get("/public", (req, res) => {
  res.send("This is a public route.");
});

// Route handler
app.get("/home", (req, res) => {
  res.send("Welcome to the home page!");
});

// Route handler
app.get("/about", (req, res) => {
  res.send("About us page");
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
