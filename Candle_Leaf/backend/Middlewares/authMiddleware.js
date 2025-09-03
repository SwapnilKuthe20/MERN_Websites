const Joi = require('joi')

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


module.exports = {
    signupMiddlware,
    loginMiddlware
}