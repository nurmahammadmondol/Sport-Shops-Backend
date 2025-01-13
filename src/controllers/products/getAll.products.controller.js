const Products = require('../../models/products.model');

const getProductData = async (req, res) => {
    try {
        const products = await Products.find(); // Assuming "Products" is your intended model

        if (!products.length) {
            return res.status(404).json({
                status: 404,
                message: "Products not found 😅",
                data: [],
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Fetched Products successfully",
            data: products,
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Server error occurred",
            error: error.message,
        });
    }
};

module.exports = getProductData;
