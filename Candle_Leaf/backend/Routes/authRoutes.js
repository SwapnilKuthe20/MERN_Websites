const { signupController, loginController, generateTokenController } = require("../Controllers/authControllers")
const { signupMiddlware, loginMiddlware } = require("../Middlewares/authMiddleware")

const authRoutes = require("express").Router()


authRoutes.post('/signup', signupMiddlware, signupController)
authRoutes.post('/login', loginMiddlware, loginController)
authRoutes.post('/generateToken', generateTokenController)

module.exports = authRoutes