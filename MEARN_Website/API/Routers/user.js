import express from 'express';
import { login, register, users } from '../Controllers/user.js';

const router = express.Router();

// registered user
router.post('/register', register)

// login user
router.post('/login', login)

// all user
router.get('/all',users)

export default router;