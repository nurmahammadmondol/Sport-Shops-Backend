const Orders = require('../../models/addorder.model');

const createOrUpdateOrderByEmail = async (req, res) => {
    const { email, productId } = req.body;

    // Validate inputs
    if (!email || !productId) {
        return res.status(400).json({
            status: 400,
            message: 'Email and Product ID are required',
        });
    }

    try {
        // Find or update the order by email, adding the productId without duplicates
        const updatedOrder = await Orders.findOneAndUpdate(
            { email }, // Find the order by email
            {
                $addToSet: { productIds: productId }, // Add productId to productIds array, avoiding duplicates
            },
            {
                new: true, // Return the updated document
                upsert: true // Create a document if it doesn't exist
            }
        );

        // Success response with the updated or newly created order
        return res.status(200).json({
            status: 200,
            message: 'Order updated successfully',
            data: updatedOrder,
        });
    } catch (error) {
        console.error('Error updating order:', error);

        // Error response
        return res.status(500).json({
            status: 500,
            message: 'Error updating order',
            error: error.message,
        });
    }
};

module.exports = createOrUpdateOrderByEmail;
