import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

//Users Routes 
router.post('/signup', userController.signup);

//  login and other user-related routes 
router.post('/signup', userController.signup);
router.post('/login', userController.login);

export default router;
