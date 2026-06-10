const Result = require('../models/resultModel');
const deleteBracket = async (req, res) => {
    try {
        const deletedBracket = await Result.findOneAndDelete({ user: req.userId });
        if (!deletedBracket) {
            return res.status(404).json({ success: false, msg: "No bracket found to delete" });
        }
        return res.status(200).json({ success: true, msg: "Bracket successfully deleted" });
    } catch {
        res.status(500).json({ success: false, msg: "Server error" });
    }
}

module.exports = deleteBracket