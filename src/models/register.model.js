const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SellerSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    storeName: String,
    phoneNumber: String,
    address: String,
    profile: String,
    isVerified: { type: Boolean, default: false },
    isOwnerVerified: { type: Boolean, default: false },
    registrationDate: { type: Date, default: Date.now },
});

// Hash the password before saving
SellerSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const Seller = mongoose.model("Seller", SellerSchema);
module.exports = Seller;
