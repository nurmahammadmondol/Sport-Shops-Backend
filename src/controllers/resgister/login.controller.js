const Seller = require("../../models/register.model");

const loginController = async (req, res) => {
    const { email } = req.body; // Only use email

    try {
        // Check if seller exists
        const seller = await Seller.findOne(email);
        if (!seller) {
            return res.status(404).json({
                statusCode: 404,
                message: "Seller not found",
            });
        }

        // Check if the seller's account is approved
        if (seller.isOwnerVerified !== true) {
            return res.status(403).json({
                statusCode: 403,
                message: "Seller's ownership is not verified",
            });
        }

        // If the account is owner verified, update isVerified to true
        if (seller.isOwnerVerified) {
            seller.isVerified = true;
            await seller.save(); // Save the updated status
        }

        // Respond with success including the role and other details
        res.status(200).json({
            statusCode: 200,
            message: "Login successful",
            seller: {
                id: seller._id,
                name: seller.name,
                email: seller.email,
                role: seller.role, // Add the role here
                storeName: seller.storeName,
                phoneNumber: seller.phoneNumber,
                isVerified: seller.isVerified,
            },
        });
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = loginController;
