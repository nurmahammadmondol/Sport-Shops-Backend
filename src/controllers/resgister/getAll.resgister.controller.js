const Seller = require("../../models/Seller");

const getAllSellers = async (req, res) => {
    try {
        // Retrieve all sellers from the database
        const sellers = await Seller.find();

        // Check if there are sellers returned
        if (sellers.length === 0) {
            return res.status(404).json({
                statusCode: 404,
                message: "No sellers found"
            });
        }

        // Successfully return the list of sellers
        res.status(200).json({
            statusCode: 200,
            message: "Sellers retrieved successfully",
            sellers: sellers
        });
    } catch (error) {
        // Handle unexpected errors (e.g., database issues)
        res.status(400).json({
            statusCode: 400,
            message: "Failed to retrieve sellers",
            error: error.message
        });
    }
};

module.exports = getAllSellers;
