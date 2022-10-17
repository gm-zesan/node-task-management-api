const express = require("express");
const { saveTaskList } = require("../controllers/taskList.controller");
const router = express.Router();

//CREATE
router.post("/", saveTaskList);

module.exports = router;
