const Cart = require('../../models/cart.model');

const getCart = async (req, res) => {
    const { email } = req.body; // Assumes email is passed as a query parameter

    try {
        // Find the cart for the given email
        const cart = await Cart.findOne(email); // Correct query syntax for MongoDB

        if (!cart) {
            return res.status(404).json({
                status: 404,
                message: 'Cart not found',
            });
        }

        // Send the cart details as a response
        res.status(200).json({
            status: 200,
            message: 'Cart retrieved successfully',
            data: cart,
        });
    } catch (error) {
        // Handle errors and send an error response
        console.error('Error retrieving cart:', error);

        res.status(500).json({
            status: 500,
            message: 'Error retrieving cart',
            error: error.message, // Include error message for debugging
        });
    }
};

module.exports = getCart;
