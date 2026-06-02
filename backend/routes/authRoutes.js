const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/authControllers");
router.post("/register", registerUser);

router.post("/registerUser", registerUser);

module.exports = router; 