const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config()
const logoutUser = async (req, res) => {
    res.clearCookie('jwt', { httpOnly: true, 
        sameSite:'none', 
        //secure:process.env.NODE_ENV !== 'development',
        secure:true,
        path:'/' });

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.status(200).json({ msg: "Logged out successfully" }); 

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
        res.status(200).json({ msg: "Logged out successfully" });
        
    } catch (err) {
        console.error("Logout error:", err);
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports = logoutUser;