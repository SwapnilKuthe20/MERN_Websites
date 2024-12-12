import express from 'express';
import { login, register } from '../Controllers/user.js';

const router = express.Router();

// registered user
router.post('/register', register)

// login user
router.post('/login', login)

export default router;