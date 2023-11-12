const express = require("express");
const {deleteUser} = require("../controllers/user.controller")
const {verifyToken} = require("../middleware/jwt")

const router = express.Router();

// router.delete("/:id", deleteUser); without middleware
router.delete("/:id",verifyToken, deleteUser); //this will execute verify token before going to deleteUser Controller

module.exports = router;