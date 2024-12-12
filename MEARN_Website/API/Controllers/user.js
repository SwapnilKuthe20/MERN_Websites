import { User } from "../Models/user.js";
import bcrypt from 'bcryptjs';

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

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) return res.json({ message: "Email not found", success: false })

        const validPass = await bcrypt.compare(password, user.password)
        if (!validPass) return res.json({ message: "Password is wrong", success: false })

        res.json({ message: `Welcome user : ${User.name}`, success: true, user })
    } catch (error) {
        res.json({ message: error.message })
    }
}


