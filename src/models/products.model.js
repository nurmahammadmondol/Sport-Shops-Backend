const mongoose = require('mongoose');

const productshema = new mongoose.Schema({
    CategoryName: { type: String, },
    ItemName: { type: String, },
    Price: { type: Number, },
    Customization: { type: Boolean, default: false },
    ProcessingTime: { type: String, required: true },
    StockStatus: { type: String, enum: ['In Stock', 'Out of Stock'], default: 'In Stock' },
    Rating: { type: Number, default: 0 },
    Description: { type: String },
    Photo: { type: String },
});

const Products = mongoose.model('Products', productshema);

module.exports = Products;
