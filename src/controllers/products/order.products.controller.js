const Orders = require('../../models/oders.model'); // Adjust the path as necessary

// Create a new order
const createOrder = async (req, res) => {
    try {
        const { email, productIds, totalAmount } = req.body;

        if (!email || !productIds || !totalAmount) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newOrder = new Orders({
            email,
            productIds,
            totalAmount,
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

module.exports = createOrder