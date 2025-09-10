const express = require('express');
const router = express.Router();
const columnsController = require('../controllers/columnsController');

// Create column in a board
router.post('/', columnsController.createColumn);

// Update column (title, position)
router.put('/:id', columnsController.updateColumn);

// Delete column
router.delete('/:id', columnsController.deleteColumn);

module.exports = router;
