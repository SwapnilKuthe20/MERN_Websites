import express from "express";
import { addProduct, getProductByID, getProducts } from "../Controllers/product.js";

const router = express.Router();

// add product 
router.post('/add', addProduct)

// get products
router.get('/allProducts', getProducts)

// get specific product
router.get('/:id', getProductByID)

export default router;