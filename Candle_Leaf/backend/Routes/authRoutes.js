const { signupController, loginController } = require("../Controllers/authControllers")
const { signupMiddlware, loginMiddlware } = require("../Middlewares/authMiddleware")

const authRoutes = require("express").Router()


authRoutes.post('/signup', signupMiddlware, signupController)
authRoutes.post('/login', loginMiddlware, loginController)

module.exports = authRoutes