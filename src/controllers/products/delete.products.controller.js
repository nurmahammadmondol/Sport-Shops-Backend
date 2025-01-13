const Products = require('../../models/products.model');

const deleteProductById = async (req, res) => {
    try {
        // Extract the product ID from the request parameters
        const { id } = req.params;

        // Find the product by ID and delete it
        const deletedProduct = await Products.findByIdAndDelete(id);

        // If no product is found, send a 404 error
        if (!deletedProduct) {
            return res.status(404).json({
                status: 404,
                message: 'Product not found',
            });
        }

        // Send a success response
        res.status(200).json({
            status: 200,
            message: 'Product deleted successfully',
            data: deletedProduct,
        });
    } catch (error) {
        // Log the error for debugging
        console.error('Error deleting product:', error);

        // Send an error response
        res.status(500).json({
            status: 500,
            message: 'Error deleting product',
            error: error.message,
        });
    }
};

module.exports = deleteProductById;
