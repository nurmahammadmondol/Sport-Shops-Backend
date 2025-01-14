const Seller = require("../../models/register.model");

const addSeller = async (req, res) => {
    try {
        // Check if the email is already registered
        const existingSeller = await Seller.findOne({ email: req.body.email });
        if (existingSeller) {
            return res.status(409).json({ // Conflict status code
                statusCode: 409,
                message: "A seller with this email already exists."
            });
        }

        // Create a new seller
        const seller = new Seller(req.body);
        const savedSeller = await seller.save();

        // Respond with success
        res.status(201).json({
            statusCode: 201,
            message: "Seller added successfully",
            seller: savedSeller
        });
    } catch (error) {
        // Validation error or others
        res.status(400).json({
            statusCode: 400,
            message: "Failed to add seller",
            error: error.message
        });
    }
};

module.exports = addSeller;
