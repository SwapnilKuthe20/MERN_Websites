import express from "express";
import { addProduct, deleteProductByID, getProductByID, getProducts, updateProductByID } from "../Controllers/product.js";

const router = express.Router();

// add product 
router.post('/add', addProduct)

// get products
router.get('/allProducts', getProducts)

// get specific product
router.get('/:id', getProductByID)

// update produxt by id
router.put('/:id', updateProductByID)

// update produxt by id
router.delete('/:id', deleteProductByID)

export default router;