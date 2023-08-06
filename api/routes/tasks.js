import express from 'express';
import {getAllTasks, getTaskById, createTask, updateTask, deleteTask} from '../../controllers/taskController.js';


const router = new express.Router();

// Tasks Routes
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks/', createTask);  
router.put("/tasks/", updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;