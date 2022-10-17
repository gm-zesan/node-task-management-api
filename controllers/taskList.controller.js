const TaskList = require("../models/TaskList");

//create information
exports.saveTaskList = async (req, res, next) => {
    const createTaskList = new TaskList(req.body);
    try {
        const savedDemo = await createTaskList.save();
        res.status(200).json(savedDemo);
    } catch (error) {
        next(error);
    }
};

// //get all information
// exports.getAllTaskList = async (req, res, next) => {
//     const queries = {};
//     if (req.query.page) {
//         const { page = 1, limit = 5 } = req.query;
//         const skip = (page - 1) * parseInt(limit);
//         queries.skip = skip;
//         queries.limit = parseInt(limit);
//     }
//     try {
//         const tasks = await TaskList.find({},{_id:0})
//             .populate("taskId")
//             .limit(queries.limit)
//             .skip(queries.skip);

//         res.status(200).json(tasks);
//     } catch (error) {
//         next(error);
//     }
// };
