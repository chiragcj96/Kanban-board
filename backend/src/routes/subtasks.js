const express = require('express');
const router = express.Router();
const subtasksController = require('../controllers/subtasksController');

// Create subtask
router.post('/', subtasksController.createSubtask);

// Update subtask (title, isDone)
router.put('/:id', subtasksController.updateSubtask);

// Delete subtask
router.delete('/:id', subtasksController.deleteSubtask);

module.exports = router;
