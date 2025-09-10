const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.listBoards = async (req, res, next) => {
  try {
    const boards = await prisma.board.findMany({
      include: {
        columns: {
          include: {
            tasks: { include: { subtasks: true } }
          }
        }
      }
    });
    res.json(boards);
  } catch (err) {
    next(err);
  }
};

exports.createBoard = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const board = await prisma.board.create({
      data: { title, description, ownerId: 1 } // hardcoded user for now
    });
    res.status(201).json(board);
  } catch (err) {
    next(err);
  }
};

exports.getBoard = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const board = await prisma.board.findUnique({
      where: { id },
      include: {
        columns: {
          include: {
            tasks: { include: { subtasks: true } }
          }
        }
      }
    });
    if (!board) return res.status(404).json({ error: 'Board not found' });
    res.json(board);
  } catch (err) {
    next(err);
  }
};

exports.updateBoard = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { title, description } = req.body;
    const board = await prisma.board.update({
      where: { id },
      data: { title, description }
    });
    res.json(board);
  } catch (err) {
    next(err);
  }
};

exports.deleteBoard = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await prisma.board.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
