const mongoose = require("mongoose");


const SellerSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, },
    storeName: String,
    phoneNumber: String,
    address: String,
    profile: String,
    isVerified: { type: Boolean, default: false },
    isOwnerVerified: { type: Boolean, default: false },
    registrationDate: { type: Date, default: Date.now },
});


const Seller = mongoose.model("Seller", SellerSchema);
module.exports = Seller;
