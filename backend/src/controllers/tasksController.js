const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create task inside a column
exports.createTask = async (req, res, next) => {
  try {
    const { columnId, title, description, position } = req.body;
    if (!columnId || !title) {
      return res.status(400).json({ error: 'columnId and title are required' });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        columnId: Number(columnId),
        position: position || 0
      }
    });

    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// Update task (title, description)
exports.updateTask = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { title, description } = req.body;

    const task = await prisma.task.update({
      where: { id },
      data: { title, description }
    });

    res.json(task);
  } catch (err) {
    next(err);
  }
};

// Move task between columns or reorder
exports.moveTask = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { columnId, position } = req.body;

    if (!columnId) return res.status(400).json({ error: 'columnId is required' });

    const task = await prisma.task.update({
      where: { id },
      data: {
        columnId: Number(columnId),
        position: position || 0
      }
    });

    res.json(task);
  } catch (err) {
    next(err);
  }
};

// Delete task
exports.deleteTask = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await prisma.task.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
