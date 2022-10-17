const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name field is required"],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "description field is required"],
    },

    dueDate: {
        type: Date,
        required: [true, "dueDate field is required"],
    },
    period: {
        type: String,
    },
    periodType: {
        type: String,
        required: true,
        enum: {
            values: ["monthly", "quarterly", "yearly"],
        },
    },
    taskListId: {
        type: ObjectId,
        ref: "TaskList",
        required: true,
    },
});
module.exports = mongoose.model("Task", TaskSchema);
