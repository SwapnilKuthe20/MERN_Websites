import { User } from "../Models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// register user
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (user) return res.json({ message: "User Already Exist", success: false });

        const hasPass = await bcrypt.hash(password, 10);

        user = await User.create({ name, email, password: hasPass });
        res.json({ message: "User created successfully !!", success: true, user })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// login user
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) return res.json({ message: "Email not found", success: false })

        const validPass = await bcrypt.compare(password, user.password)
        if (!validPass) return res.json({ message: "Password is wrong", success: false })

        const token = jwt.sign({ userId: user._id }, "!@#$%^&*()", {
            expiresIn: "356d"
        })
        res.json({ message: `Welcome user : ${User.name}`, token, success: true })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// all users
export const users = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 })
        res.json({ users })
    } catch (error) {
        res.json({ message: error.message })
    }
}


