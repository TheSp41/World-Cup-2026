const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const logoutUser = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); 

    const refreshToken = cookies.jwt;

    try {
        const decoded = jwt.decode(refreshToken);
        
        if (decoded && decoded.id) {
            const foundUser = await User.findById(decoded.id);
            if (foundUser) {
                foundUser.refreshToken = "";
                await foundUser.save();
            }
        }
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'strict', secure: true });
        res.status(200).json({ msg: "Logged out successfully" });
        
    } catch (err) {
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports = logoutUser;