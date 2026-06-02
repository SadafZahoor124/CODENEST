const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema(
    {
    tittle : {
    type: String,
    required: true
    },
    description : {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        default: "Easy",
    },
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Problem", problemSchema);