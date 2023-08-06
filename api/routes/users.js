import express from 'express';
import {signup, login} from './controllers/userController.js';


const router = express.Router();

//Users Routes 


//  login and other user-related routes 
router.post('/signup', signup);
router.post('/login', login);

export default router;
