import { Address } from "../Models/Address.js";

// add address controller
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

// get address controller
export const getAddress = async (req, res) => {
    let address = await Address.find({ userId: req.user }).sort({ createdAt: -1 });
    res.json({ message: "address", userAddress: address[0] })
}





