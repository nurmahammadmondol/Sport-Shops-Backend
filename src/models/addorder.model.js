const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    email: { type: String, required: true },  // Corrected email field type to String
    productIds: [
        {
            type: mongoose.Schema.Types.ObjectId, // Store references to Product IDs
            ref: 'Products', // Reference the Products model
        },
    ],

    orderDate: { type: Date, default: Date.now },
});

const Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders;
