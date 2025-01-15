const Orders = require('../../models/oders.model');

const getOrders = async (req, res) => {
    const { email } = req.body; // Retrieve the email from the query parameters

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        // Find orders by email and populate the product details
        const orders = await Orders.findOne(email)
        // Populate the product details using the productId

        if (!orders.length) {
            return res.status(404).json({ message: 'No orders found for this email' });
        }

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};

module.exports = getOrders;
