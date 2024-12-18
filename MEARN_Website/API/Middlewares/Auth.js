import jwt from 'jsonwebtoken';
import { User } from '../Models/user.js';

export const Authenticated = async (req, res, next) => {
    const token = req.header("Auth");

    if (!token) return res.json({ message: "login first" })

    const decoded = jwt.verify(token, "!@#$%^&*()")
    // console.log(decoded, "...decoded");
    const id = decoded.userId;

    let user = await User.findById(id);
    if (!user) return res.json({ message: "User not found" })

    req.user = user
    next();

}