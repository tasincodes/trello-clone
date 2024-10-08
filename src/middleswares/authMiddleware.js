const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).json({ message: "No token, Authorization denied" })
    }
    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    }
    catch (error) {
        res.status(401).json({ message: "Token is invalid" })
    }

}
module.exports = auth;