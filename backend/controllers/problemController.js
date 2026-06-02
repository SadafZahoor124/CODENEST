const Problem = require("../models/Problem");
exports.createProblem = async (req, res) => {
    try {
        const problem = await Problem.create(req.body);
        res.status(201).json(problem);
    }
    catch(error) {
        res.status(500).json({error:error.message});
    }
};
exports.getAllProblems = async (req,res) => {
    try {
        const problem = await Problem.find();
        res.json(problem);
    }
    catch(error) {
        res.status(500).json({
            error:error.message
        });
    }
};