const express = require('express')
const cors = require("cors")
const connectDB = require("./config/db");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const problemRoutes = require("./routes/problemRoutes");
const submissionRoutes = require("./routes/submissionRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes")); 
app.use("/api/priblems", require("./routes/problemRoutes")); 
app.use("/api/submissions", require("./routes/submissionRoutes")); 

app.get("/" , (req , res) => {
    res.send("Hello, This is my first backend project")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})
