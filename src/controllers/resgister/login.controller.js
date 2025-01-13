const Seller = require("../../models/Seller");
const bcrypt = require("bcrypt");

const loginSeller = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if seller exists
        const seller = await Seller.findOne({ email });
        if (!seller) {
            return res.status(404).json({
                statusCode: 404,
                message: "Seller not found"
            });
        }

        // Check if the seller's account is approved
        if (seller.isApproved !== true) {
            return res.status(403).json({
                statusCode: 403,
                message: "Seller account is not approved"
            });
        }

        // Check if password matches
        const isPasswordValid = await bcrypt.compare(password, seller.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                statusCode: 401,
                message: "Invalid email or password"
            });
        }

        // Respond with success
        res.status(200).json({
            statusCode: 200,
            message: "Login successful",
            seller: {
                id: seller._id,
                name: seller.name,
                email: seller.email,
                storeName: seller.storeName,
                phoneNumber: seller.phoneNumber,
                isVerified: seller.isVerified,
            },
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Internal server error",
            error: error.message
        });
    }
};

module.exports = loginSeller;
