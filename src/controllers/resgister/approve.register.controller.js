const Seller = require("../../models/register.model");

const approveSeller = async (req, res) => {
    const { id } = req.params;
    try {
        // Attempt to find and update the seller's verification status
        const approvedSeller = await Seller.findByIdAndUpdate(
            id,
            { isVerified: true },
            { new: true }  // To return the updated seller
        );

        // Check if the seller exists
        if (!approvedSeller) {
            return res.status(404).json({
                statusCode: 404,
                message: "Seller not found"
            });
        }

        // Successfully approved the seller
        res.status(200).json({
            statusCode: 200,
            message: "Seller approved successfully",
            seller: approvedSeller
        });
    } catch (error) {
        // Handle unexpected errors or invalid data
        res.status(400).json({
            statusCode: 400,
            message: "Failed to approve seller",
            error: error.message
        });
    }
};

module.exports = approveSeller;
