import { User } from "../Models/user.js";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({ name, email, password });
        res.json({ message: "User created successfully !!", success: true })
    } catch (error) {
        res.json({ message: error.message })
    }
}





