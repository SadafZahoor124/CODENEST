const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Problem",
    },
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required : true
    },
    status : {
        type: String,
        enum : ["Accepted", "Wrong Answer" , "Runtime Error"],
        default : "Wrong Answer",
    }
  } ,
  { timestamps : true } 
);

module.exports = mongoose.model("Submission", submissionSchema);