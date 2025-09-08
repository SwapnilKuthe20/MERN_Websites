

const productController = (req, res) => {
    try {

        return res.status(200).json({ success: true, message: "Products api success " })

    } catch (error) {
        console.log("error occure in productController ");
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

module.exports = {
    productController
}