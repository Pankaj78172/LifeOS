const Task = require("../models/Task")

const getTasks = async (req, res) => {
  const tasks = await Task.find()
  res.json(tasks)
}

const addTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json(task)
}

const deleteTask = async (req, res) => {
  const { id } = req.params

  await Task.findByIdAndDelete(id)

  res.json({ message: "Task deleted" })
}

const toggleTask = async (req, res) => {
  const { id } = req.params

  const task = await Task.findById(id)

  task.completed = !task.completed
  await task.save()

  res.json(task)
}

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  toggleTask
}