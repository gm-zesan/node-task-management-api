const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const TaskListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name field is required"],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "description field is required"],
    },
    active: {
        type: Boolean,
        default: true,
    },
});
module.exports = mongoose.model("TaskList", TaskListSchema);
