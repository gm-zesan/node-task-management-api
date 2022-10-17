const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

const app = express();

dotenv.config();
app.use(express.json());

const taskListRoute = require("./routes/taskList.route");
const taskRoute = require("./routes/task.route");

// database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("DB Disconnected");
});

app.get("/", (req, res) => {
    res.send("Welcome to server");
});

app.use("/api/createtasklist", taskListRoute);
app.use("/api/createtask", taskRoute);

//Global Error Handlaer
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(port, () => {
    connect();
    console.log("Server is running", port);
});
