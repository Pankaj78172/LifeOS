const express = require("express")
const router = express.Router()

const {
  getTasks,
  addTask,
  deleteTask,
  toggleTask
} = require("../controllers/taskController")

const { protect } = require("../middleware/authMiddleware")

router.get("/", protect, getTasks)
router.post("/", protect, addTask)
router.put("/:id/toggle", protect, toggleTask)
router.delete("/:id", protect, deleteTask)

module.exports = router