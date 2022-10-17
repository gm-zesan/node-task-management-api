const Task = require("../models/Task");
const TaskList = require("../models/TaskList");

//create
exports.saveTask = async (req, res, next) => {
    const createTask = new Task(req.body);
    try {
        const savedTask = await createTask.save();

        res.status(200).json(savedTask);
    } catch (error) {
        next(error);
    }
};

//get all information
exports.getAllTaskList = async (req, res, next) => {
    const queries = {};
    if (req.query.page) {
        const { page = 1, limit = 5 } = req.query;
        const skip = (page - 1) * parseInt(limit);
        queries.skip = skip;
        queries.limit = parseInt(limit);
    }
    try {
        const tasks = await Task.find({}, { _id: 0, __v: 0 })
            .populate("taskListId", "name -_id")
            .limit(queries.limit)
            .skip(queries.skip);

        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
};
