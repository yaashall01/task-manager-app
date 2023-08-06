import express from 'express';
import taskController from './controller/taskContorller.js';


const router = new express.Router();

// Tasks Routes
router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/tasks/', taskController.createTask);  
router.put("/tasks/", taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;