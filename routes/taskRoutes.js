const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Task routes
router.get('/', taskController.getAllTasks);
router.get('/add', taskController.getAddTaskForm);
router.post('/add', taskController.createTask);
router.get('/edit/:id', taskController.getEditTaskForm);
router.post('/edit/:id', taskController.updateTask);
router.get('/delete/:id', taskController.deleteTask);
router.get('/toggle/:id', taskController.toggleTaskCompletion);

module.exports = router;