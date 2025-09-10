const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

const boardsRouter = require('./routes/boards');
const columnsRouter = require('./routes/columns');
const tasksRouter = require('./routes/tasks');
const subtasksRouter = require('./routes/subtasks');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Healthcheck
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Routes
app.use('/api/boards', boardsRouter);
app.use('/api/columns', columnsRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/subtasks', subtasksRouter);

// Error handler
app.use(errorHandler);

module.exports = app;
