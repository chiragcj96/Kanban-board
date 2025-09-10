const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

// Create a task
router.post('/', tasksController.createTask);

// Update a task
router.put('/:id', tasksController.updateTask);

// Move a task between columns
router.post('/:id/move', tasksController.moveTask);

// Delete a task
router.delete('/:id', tasksController.deleteTask);

module.exports = router;
