const Cart = require('../../models/addtocart.model');

const addToCart = async (req, res) => {
    const { email, productId } = req.body;

    try {
        // Find the cart by email and update the productIds array
        const updatedCart = await Cart.findOneAndUpdate(
            { email }, // Find cart by email
            { $addToSet: { productIds: productId } }, // Add productId to the array, avoiding duplicates
            { new: true, upsert: true } // Return the updated document and create one if it doesn't exist
        );

        // Respond with the updated or created cart
        res.status(200).json({
            status: 200,
            message: 'Cart updated successfully',
            data: updatedCart
        });
    } catch (error) {
        console.error('Error updating cart:', error);

        // Error response
        res.status(500).json({
            status: 500,
            message: 'Error updating cart',
            error: error.message,
        });
    }
};

module.exports = addToCart;
