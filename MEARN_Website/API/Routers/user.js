import express from 'express';
import { login, profile, register, users } from '../Controllers/user.js';
import { Authenticated } from '../Middlewares/Auth.js';

const router = express.Router();

// registered user
router.post('/register', register)

// login user
router.post('/login', login)

// all user
router.get('/all', users)

// get profile
router.get('/profile', Authenticated, profile)

export default router;