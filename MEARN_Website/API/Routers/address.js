import express from 'express';
import { addAddress } from '../Controllers/address.js';
import { Authenticated } from '../Middlewares/Auth.js';

const router = express.Router();

// add adress
router.post('/add', Authenticated, addAddress)


export default router;