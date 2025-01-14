const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    email: { type: String, required: true },  // Corrected email field type to String
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
            quantity: { type: Number },  // Optionally make quantity required
        }
    ],
    totalAmount: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
});

const Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;
