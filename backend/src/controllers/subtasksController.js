const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create subtask under a task
exports.createSubtask = async (req, res, next) => {
  try {
    const { taskId, title } = req.body;
    if (!taskId || !title) {
      return res.status(400).json({ error: 'taskId and title are required' });
    }

    const subtask = await prisma.subtask.create({
      data: { taskId: Number(taskId), title }
    });

    res.status(201).json(subtask);
  } catch (err) {
    next(err);
  }
};

// Update subtask (mark done or update title)
exports.updateSubtask = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { title, isDone } = req.body;

    const subtask = await prisma.subtask.update({
      where: { id },
      data: { title, isDone }
    });

    res.json(subtask);
  } catch (err) {
    next(err);
  }
};

// Delete subtask
exports.deleteSubtask = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    await prisma.subtask.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
