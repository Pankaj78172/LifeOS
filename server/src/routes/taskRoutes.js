const express = require("express")
const router = express.Router()

const {
  getTasks,
  addTask,
  deleteTask,
  toggleTask
} = require("../controllers/taskController")

router.get("/", getTasks)
router.post("/", addTask)
router.delete("/:id", deleteTask)
router.put("/:id/toggle", toggleTask)

module.exports = router