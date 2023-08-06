import express from 'express';

const router = express.Router();

//Users Routes 
router.post('/signup', signup);

//  login and other user-related routes 
router.post('/signup', signup);
router.post('/login', login);

export default router;
