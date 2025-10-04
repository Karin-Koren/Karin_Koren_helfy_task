
const express = require("express");
const router = express.Router();

let tasks = [];
let taskID = 1;

router.get("/" , (req, res) => {
    res.json(tasks);
})

router.post("/", (req, res) => {
    const { title, description, priority} = req.body;
    const newTask = {id: taskID++, title: title, description: description, completed: false, createdAt: new Date(), priority: priority };
    tasks.push(newTask);
    res.json(newTask);
})

router.put("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    const existingTask = tasks[index];
    const updatedTask = { ...existingTask, ...req.body, id: existingTask.id };
    tasks[index] = updatedTask;
    res.json(updatedTask);
})

router.delete("/:id", (req,res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);
    res.status(200).json({ message: "Task deleted" });
})

router.patch("/:id/toggle", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }
    
    task.completed = !task.completed;
    res.json(task);
})

module.exports = router;