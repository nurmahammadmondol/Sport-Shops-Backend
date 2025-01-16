const Cart = require('../../models/addtocart.model');

const getCart = async (req, res) => {
    const { email } = req.body; // Assumes email is passed in the request body

    try {
        // Find the cart for the given email
        const cart = await Cart.find(email); // Corrected query syntax

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
            error: error.message,
        });
    }
};

module.exports = getCart;
