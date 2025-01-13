const Seller = require("../../models/Seller");

const deleteSeller = async (req, res) => {
    const { id } = req.params;
    try {
        // Attempt to find and delete the seller by their ID
        const deletedSeller = await Seller.findByIdAndDelete(id);

        // Check if the seller was found and deleted
        if (!deletedSeller) {
            return res.status(404).json({
                statusCode: 404,
                message: "Seller not found"
            });
        }

        // Successfully deleted the seller
        res.status(200).json({
            statusCode: 200,
            message: "Seller deleted successfully"
        });
    } catch (error) {
        // Handle unexpected errors (e.g., invalid ID format or database issues)
        res.status(400).json({
            statusCode: 400,
            message: "Failed to delete seller",
            error: error.message
        });
    }
};

module.exports = deleteSeller;
