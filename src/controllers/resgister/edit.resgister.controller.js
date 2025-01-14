const Seller = require("../../models/register.model");

const editSeller = async (req, res) => {
    const { id } = req.params;
    try {
        // Attempt to find and update the seller
        const updatedSeller = await Seller.findByIdAndUpdate(id, req.body, { new: true });

        // Check if the seller was found and updated
        if (!updatedSeller) {
            return res.status(404).json({
                statusCode: 404,
                message: "Seller not found"
            });
        }

        // Successfully updated the seller
        res.status(200).json({
            statusCode: 200,
            message: "Seller updated successfully",
            seller: updatedSeller
        });
    } catch (error) {
        // Handle unexpected errors such as invalid data or database issues
        res.status(400).json({
            statusCode: 400,
            message: "Failed to update seller",
            error: error.message
        });
    }
};

module.exports = editSeller;
