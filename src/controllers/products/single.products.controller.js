const Products = require('../../models/products.model');

const getProductData = async (req, res) => {
    try {
        const { id } = req.params; // Extract the product ID from the request parameters
        console.log(id)
        // Check if the ID is provided
        if (!id) {
            return res.status(400).json({
                status: 400,
                message: "Product ID is required",
            });
        }

        // Find the product by ID
        const product = await Products.findById(id);

        if (!product) {
            return res.status(404).json({
                status: 404,
                message: "Product not found 😅",
            });
        }

        return res.status(200).json({
            status: 200,
            message: "Fetched Product successfully",
            data: product,
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
