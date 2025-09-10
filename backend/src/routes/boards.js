const express = require('express');
const router = express.Router();
const boardsController = require('../controllers/boardsController');
const validate = require("../middlewares/validate");
const { createBoardSchema } = require("../validation/boardSchemas");

// CRUD
router.get('/', boardsController.listBoards);
router.post('/', boardsController.createBoard);
router.get('/:id', boardsController.getBoard);
router.put('/:id', boardsController.updateBoard);
router.delete('/:id', boardsController.deleteBoard);
router.post("/", validate(createBoardSchema), boardsController.createBoard);

module.exports = router;
