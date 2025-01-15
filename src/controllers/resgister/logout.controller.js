const Seller = require('../../models/register.model');

const logoutController = async (req, res) => {
    try {
        const { email } = req.body; // Assuming email is passed in the request body

        // Check if email is provided
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        // Find the seller by email
        const seller = await Seller.findOne({ email });

        // If the seller doesn't exist, return an error
        if (!seller) {
            return res.status(404).json({ message: 'Seller not found' });
        }

        // Set the isVerified field to false
        seller.isVerified = false;

        // Save the updated seller object
        await seller.save();

        // Return a response indicating the seller has been logged out
        res.status(200).json({ message: 'Seller is logged out, verification status set to false' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports =
    logoutController

