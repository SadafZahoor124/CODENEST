const express = require("express");
const {
    createSubmission,
    getUserSubmissions
} = require("../controllers/submissionController");

const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", createSubmission);
router.get("/:userId" , protect , getUserSubmissions);

module.exports = router;