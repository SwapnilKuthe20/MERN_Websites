import { Address } from "../Models/Address.js";

export const addAddress = async (req, res) => {
    const { fullname, address, city, state, country, pinCode, phoneNumber } = req.body;

    try {
        let userAddress = await Address.create(
            { userId: req.user, fullname, address, city, state, country, pinCode, phoneNumber }
        );
        res.json({ message: "Address added", userAddress });
    } catch (error) {
        res.json(error.message)
    }
}





