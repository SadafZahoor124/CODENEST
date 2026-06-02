const Submission = require("../models/Submission");

exports.createSubmission = async (req, res) => {
    try {
        const submission = await Submission.create(req.body);
        res.status(201).json(submission);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};
exports.getUserSubmissions = async(req, res) => {
    try {
        const submissions = await Submission.find({
            userId: req.params.userId,
        });
        res.json(submissions);
    }
    catch (error) {
        res.status(500).json({
            error:error.message
        });
    }
}