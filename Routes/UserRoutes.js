const express = require("express");
const router = express.Router();

// Import User Controller
const UserController = require("../Controllers/UserControllers");

// Define Routes
router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);

// Export the router
module.exports = router;

