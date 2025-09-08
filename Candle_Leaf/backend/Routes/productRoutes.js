const { productController } = require('../Controllers/productsController')
const { verifyTokenMiddleware } = require('../Middlewares/authMiddleware')

const productRoute = require('express').Router()

productRoute.get('/', verifyTokenMiddleware, productController)

module.exports = {
    productRoute
}