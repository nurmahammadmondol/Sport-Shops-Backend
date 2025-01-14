
const Orders = require('../../models/oders.model');
const getOrders = async (req, res) => {
    try {
        const orders = await Orders.find().populate('products.productId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};

module.exports = getOrders;