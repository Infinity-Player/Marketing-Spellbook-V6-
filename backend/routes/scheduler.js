const express = require("express");
const router = express.Router();

let tasks = [
  { id: 1, title: "Post blog on LinkedIn", date: "2025-09-01" },
  { id: 2, title: "Run Twitter campaign", date: "2025-09-05" },
];

// GET tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST add task
router.post("/", (req, res) => {
  const newTask = { id: Date.now(), ...req.body };
  tasks.push(newTask);
  res.json(newTask);
});

module.exports = router;
