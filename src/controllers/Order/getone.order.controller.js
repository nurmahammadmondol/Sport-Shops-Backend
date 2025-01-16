const Orders = require('../../models/addorder.model');

const getOrders = async (req, res) => {
    const { email } = req.body; // Destructure email from the request body


    try {
        // Find orders by email and populate product details
        const orders = await Orders.find(email) // Find orders with the specified email

        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this email' });
        }

        res.status(200).json(orders); // Respond with the fetched orders
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};

module.exports = getOrders;
