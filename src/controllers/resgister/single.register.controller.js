const Seller = require("../../models/register.model");

const getSingleSeller = async (req, res) => {
    const { id } = req.params;
    try {
        // Attempt to find a seller by their ID
        const seller = await Seller.findById(id);

        // Check if the seller exists
        if (!seller) {
            return res.status(404).json({
                statusCode: 404,
                message: "Seller not found"
            });
        }

        // Successfully return the seller details
        res.status(200).json({
            statusCode: 200,
            message: "Seller retrieved successfully",
            seller: seller
        });
    } catch (error) {
        // Handle unexpected errors (e.g., invalid ID format or database issues)
        res.status(400).json({
            statusCode: 400,
            message: "Failed to retrieve seller",
            error: error.message
        });
    }
};

module.exports = getSingleSeller;
