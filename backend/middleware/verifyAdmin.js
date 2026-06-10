const verifyAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization

    if (!authHeader) {
        return res.status(401).json({ success: false, msg: "No authorization header provided" })
    }
    const token = authHeader.startsWith('Bearer ')?authHeader.split(' ')[1]: authHeader

    if (token === process.env.ADMIN_PASS) {
        next()
    } else {
        return res.status(403).json({ success: false, msg: "Not authorized" })
    }
};

module.exports = verifyAdmin;