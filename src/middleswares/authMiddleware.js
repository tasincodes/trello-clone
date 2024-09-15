const jwt = require("jsonwebtoken")

const auth = (req, res, kext) => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).json({ message: "No token, Authorization denied" })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        kext();
    }
    catch (error) {
        res.status(401).json({ message: "Token is invalid" })
    }

}
module.exports = auth;