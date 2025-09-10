const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a column inside a board
exports.createColumn = async (req, res, next) => {
  try {
    const { boardId, title, position } = req.body;
    if (!boardId || !title) {
      return res.status(400).json({ error: 'boardId and title are required' });
    }

    const column = await prisma.column.create({
      data: { title, boardId: Number(boardId), position: position || 0 }
    });

    res.status(201).json(column);
  } catch (err) {
    next(err);
  }
};

// Update column
exports.updateColumn = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { title, position } = req.body;

    const column = await prisma.column.update({
      where: { id },
      data: { title, position }
    });

    res.json(column);
  } catch (err) {
    next(err);
  }
};

// Delete column
exports.deleteColumn = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await prisma.column.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
