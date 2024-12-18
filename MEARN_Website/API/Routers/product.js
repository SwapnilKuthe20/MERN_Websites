import express from "express";
import { addProduct, getProducts } from "../Controllers/product.js";

const router = express.Router();

// add product 
router.post('/add', addProduct)

// get products
router.get('/allProducts', getProducts)

export default router;