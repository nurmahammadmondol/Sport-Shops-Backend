const Products = require('../../models/products.model');

const addProduct = async (req, res) => {
    try {
        // Create a new product instance with the data from the request body
        const product = new Products(req.body);

        // Save the product to the database
        const savedProduct = await product.save();

        // Send a success response
        res.status(201).json({
            status: 201,
            message: 'Product added successfully',
            data: savedProduct,
        });
    } catch (error) {
        // Log the error for debugging (optional, but helpful in larger projects)
        console.error('Error adding product:', error);

        // Send an error response
        res.status(500).json({
            status: 500,
            message: 'Error adding product',
            error: error.message, // Include the error message for debugging
        });
    }
};
module.exports = addProduct;