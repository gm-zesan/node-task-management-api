const express = require("express");
const { saveTask, getAllTaskList } = require("../controllers/task.controller");
const router = express.Router();

//CREATE
router.post("/", saveTask);

//GET
router.get("/", getAllTaskList);
module.exports = router;
