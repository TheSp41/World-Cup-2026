const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, msg: "Unauthorized" })
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ success: false, msg: "Token expired or invalid" })
        }
        req.userId = decoded.id
        next()
    })
};

module.exports = verifyToken