const Cart = require('../../models/cart.model');
const Products = require('../../models/products.model');

const addToCart = async (req, res) => {
    const { email, productId } = req.body;

    try {
        // Check if the product exists
        const product = await Products.findById(productId);
        if (!product) {
            return res.status(404).json({
                status: 404,
                message: 'Product not found',
            });
        }

        // Check if the cart already exists for the user
        let cart = await Cart.findOne({ email });

        if (!cart) {
            // If no cart exists, create a new cart for the user
            cart = new Cart({ email, productIds: [productId] });
        } else {
            // Add the productId to the cart if not already present
            if (!cart.productIds.includes(productId)) {
                cart.productIds.push(productId);
            } else {
                return res.status(200).json({
                    status: 200,
                    message: 'Product already in cart',
                    cart,
                });
            }
        }

        // Save the updated or new cart
        const savedCart = await cart.save();

        // Send a success response
        res.status(201).json({
            status: 201,
            message: 'Product added to cart successfully',
            data: savedCart,
        });
    } catch (error) {
        // Handle errors and send an error response
        console.error('Error adding to cart:', error);

        res.status(500).json({
            status: 500,
            message: 'Error adding to cart',
            error: error.message, // Include error message for debugging
        });
    }
};

module.exports = addToCart;
