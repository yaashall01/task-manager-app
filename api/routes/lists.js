import express from 'express';

import {getAllLists, getListById, createList, updateList, deleteList} from '../../api/controllers/listController.js'

const router = express.Router();

// lists Routes
router.get('/lists', getAllLists);
router.get('/lists/:id', getListById);
router.post('/lists', createList);
router.put('/lists/:id', updateList);
router.delete('/lists/:id', deleteList);

export default router;