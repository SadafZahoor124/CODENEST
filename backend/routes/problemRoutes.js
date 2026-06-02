const express = require("express");

const {
    createProblem,
    getAllProblems,
} = require("../controllers/problemController");

const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect , createProblem);
router.get("/", getAllProblems);

module.exports = router;