const Products = require('../../models/products.model');

const updateProductById = async (req, res) => {
    try {
        // Extract the product ID from the request parameters
        const { id } = req.params;

        // Find the product by ID and update it with the new data from the request body
        const updatedProduct = await Products.findByIdAndUpdate(id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Run validators on the updated document
        });

        // If no product is found, send a 404 error
        if (!updatedProduct) {
            return res.status(404).json({
                status: 404,
                message: 'Product not found',
            });
        }

        // Send a success response
        res.status(200).json({
            status: 200,
            message: 'Product updated successfully',
            data: updatedProduct,
        });
    } catch (error) {
        // Log the error for debugging
        console.error('Error updating product:', error);

        // Send an error response
        res.status(500).json({
            status: 500,
            message: 'Error updating product',
            error: error.message, // Include the error message for debugging
        });
    }
};

module.exports = updateProductById;
