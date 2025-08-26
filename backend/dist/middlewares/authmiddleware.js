import jwt, {} from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const authmiddleware = (req, res, next) => {
    const token = req.headers.token;
    const jwt_key = process.env.JWT_KEY;
    if (!jwt_key) {
        console.log("Invalid jwt_key");
        return;
    }
    if (!token) {
        return res.status(400).json({ msg: "You are not signed in !" });
    }
    try {
        const decoded = jwt.verify(token, jwt_key);
        if (!decoded || !decoded.id) {
            return res.status(401).json({ msg: "Invalid token. Access denied !" });
        }
        req.userid = decoded.id;
        req.role = decoded.role;
        next();
    }
    catch (error) {
        res.status(500).json({ msg: "Something went wrong !" });
    }
};
//# sourceMappingURL=authmiddleware.js.map