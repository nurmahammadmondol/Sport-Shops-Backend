const Cart = require('../../models/addtocart.model');
const deleteCart = async (req, res) => {
    const { email } = req.body;

    try {
        // Check if the cart exists for the user
        let cart = await Cart.findOne({ email });

        if (!cart) {
            return res.status(404).json({
                status: 404,
                message: 'Cart not found',
            });
        }

        // Delete the user's cart
        await Cart.deleteOne({ email });

        // Send a success response
        res.status(200).json({
            status: 200,
            message: 'Cart deleted successfully',
        });
    } catch (error) {
        // Handle errors and send an error response
        console.error('Error deleting cart:', error);

        res.status(500).json({
            status: 500,
            message: 'Error deleting cart',
            error: error.message, // Include error message for debugging
        });
    }
};

module.exports = deleteCart;
