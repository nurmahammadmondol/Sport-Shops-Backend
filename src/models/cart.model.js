const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true, // Ensures one cart per user
            trim: true,
            lowercase: true, // Store email in lowercase
        },
        productIds: [
            {
                type: mongoose.Schema.Types.ObjectId, // Store references to Product IDs
                ref: 'Products', // Reference the Products model
            },
        ],
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
``
