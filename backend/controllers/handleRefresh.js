const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const User = require('../models/userModel');

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.status(401).json({ msg: "Not authenticated" });
    
    const refreshToken = cookies.jwt;

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)

        const foundUser = await User.findById(decoded.id)
        
        if (!foundUser || !foundUser.refreshToken) {
            return res.status(403).json({ msg: "Invalid session" });
        }
        const isMatch = await bcrypt.compare(refreshToken, foundUser.refreshToken);
        if (!isMatch) {
            return res.status(403).json({ msg: "Token mismatch" });
        }
        const accessToken = jwt.sign(
            { id: decoded.id },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }
        );

        res.json({ accessToken,username:foundUser.username});

    } catch (err) {
        res.status(403).json({ msg: "Token expired or invalid" });
    }
};

module.exports = handleRefreshToken;