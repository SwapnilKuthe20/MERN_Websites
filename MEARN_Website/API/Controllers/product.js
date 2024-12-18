import { Products } from "../Models/product.js"

// add product

export const addProduct = async (req, res) => {
    const { title, description, price, category, qty, imgSrc, createdAt } = req.body;
    try {
        let product = await Products.create({
            title, description, price, category, qty, imgSrc, createdAt
        })

        res.json({ message: "Product created successfully !", success: true })

    } catch (error) {
        res.json(error.message)
    }
}

export const getProducts = async (req, res) => {

    try {
        let products = await Products.find().sort({ createdAt: -1 });
        res.json({ message: "All Products", products, success: true });

    } catch (error) {
        res.json(error.message)
    }
}





