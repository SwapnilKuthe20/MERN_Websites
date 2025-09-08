const Joi = require('joi')
const Jwt = require('jsonwebtoken')

const signupMiddlware = (req, res, next) => {
    try {

        const { userName, email, password } = req.body

        const schema = Joi.object({
            userName: Joi.string().min(4).max(15).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(20).required()
        })

        const { error } = schema.validate({ userName, email, password })

        if (error) {
            // console.log(error, "...error");
            return res.status(400).json({ success: false, message: error.details[0].message })
        }

        next()

    } catch (error) {
        console.log(error, "...Error Occure in signup Middleware");
        return res.status(500).json({ success: false, message: "Internal Server Error " })
    }
}

const loginMiddlware = (req, res, next) => {
    try {

        const { email, password } = req.body

        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(20).required()
        })

        const { error } = schema.validate({ email, password })

        if (error) {
            // console.log(error, "...error");
            return res.status(400).json({ success: false, message: error.details[0].message })
        }

        next()

    } catch (error) {
        console.log("Error Occure in login Middleware");
        return res.status(500).json({ success: false, message: "Internal Server Error " })
    }
}

const verifyTokenMiddleware = (req, res, next) => {
    try {

        const bearerToken = req.headers.authorization.split(' ')[1]
        // console.log(accessToken, "...acces verify ");

        if (!bearerToken) {
            return res.json({ success: false, message: "Bearer token not found !" })
        }

        const verifyBearerPayload = Jwt.verify(bearerToken, process.env.ACCESS_TOKEN)
        // console.log(verifyBearerPayload, "...verify payload");

        req.user = verifyBearerPayload

        next()

    } catch (err) {
        console.log("Error object:", { ...err });          // pura error object
        console.log("Error name:", err.name);       // specific property
        console.log("Error message:", err.message); // specific message
        console.log("Error stack:", err.stack);     // kaha se error aaya

        if (err.name === "TokenExpiredError" || err.message === "jwt expired") {
            return res.status(500).json({ success: false, message: "jwt expired please login again" })

        } else if (err.name === "JsonWebTokenError" || err.message === "invalid signature") {
            return res.status(500).json({ success: false, message: "Please enter valid token" })

        } else {
            return res.status(500).json({ success: false, message: "Internal server error" })
        }
    }
}

module.exports = {
    signupMiddlware,
    loginMiddlware,
    verifyTokenMiddleware
}