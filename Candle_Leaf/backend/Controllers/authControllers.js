
const { userModel } = require('../Models/usersModel')
const bcrypt = require('bcryptjs')
const Jwt = require('jsonwebtoken')

const signupController = async (req, res) => {
    try {

        const { userName, email, password } = req.body

        const existUser = await userModel.findOne({ email })
        // console.log(existUser, "...existUser");

        if (existUser) {
            return res.status(400).json({ success: false, message: "User already exist !" })
        }

        const hashPass = await bcrypt.hash(password, 10)

        const newUser = userModel({ userName, email, password: hashPass })
        await newUser.save()

        return res.json({
            success: true,
            message: "User register successfully !",
            user: {
                userName,
                email
            }
        })

    } catch (error) {
        console.log(error, "Error Occure in Signup Controller");
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

const loginController = async (req, res) => {
    try {

        const { email, password } = req.body

        const userExist = await userModel.findOne({ email })
        // console.log(userExist, "...userExist login");

        if (!userExist) {
            return res.status(400).json({ success: false, message: "User not Found please signup first" })
        }

        const comparePass = await bcrypt.compare(password, userExist.password)
        // console.log(comparePass, "...compare pass");

        if (!comparePass) {
            return res.status(400).json({ success: false, message: "Username or password incorrect ??" })
        }

        const accessToken = Jwt.sign(
            { userId: userExist._id, email: userExist.email },
            process.env.ACCESS_TOKEN,
            { expiresIn: process.env.ACCESS_EXPIRY }
        )

        const refreshToken = Jwt.sign(
            { userId: userExist._id, email: userExist.email },
            process.env.REFRESH_TOKEN,
            { expiresIn: process.env.REFRESH_EXPIRY }
        )

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000     // 7 days
        })

        return res.status(200).json({
            success: true,
            message: "User Login successfully !!",
            accessToken
        })


    } catch (error) {
        console.log(error, "Error Occure in login Controller");
        return res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}

module.exports = {
    signupController,
    loginController
}