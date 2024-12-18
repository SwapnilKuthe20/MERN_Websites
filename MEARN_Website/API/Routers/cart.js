import express from 'express';
import { addToCart, clearCart, decreaseProctQty, removeProdutFromCart, userCart } from '../Controllers/Cart.js';
import { Authenticated } from '../Middlewares/Auth.js';

const router = express.Router();

// add to cart
router.post('/add', Authenticated, addToCart)

// get user cart
router.get('/user', Authenticated, userCart)

// remove product
router.delete('/remove/:productId', Authenticated, removeProdutFromCart);

// clear product
router.delete('/clear', Authenticated, clearCart);

// decease item quantity 
router.post('/--qty', Authenticated, decreaseProctQty);

export default router;