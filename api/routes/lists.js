import express from 'express';
import listController from'../controllers/listController';

const router = express.Router();

// lists Routes
router.get('/lists', listController.getAllLists);
router.get('/lists/:id', listController.getListById);
router.post('/lists', listController.createList);
router.put('/lists/:id', listController.updateList);
router.delete('/lists/:id', listController.deleteList);

export default router;