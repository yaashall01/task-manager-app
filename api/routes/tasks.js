import express from 'express';
import taskController from './controller/taskController.js';


const router = new express.Router();

// Tasks Routes
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks/', createTask);  
router.put("/tasks/", updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;