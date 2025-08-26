export const authorizerole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles || !allowedRoles.includes(req.role)) {
            return res.status(403).json({ msg: "Access denied !" });
        }
        next();
    };
};
//# sourceMappingURL=rolemiddleware.js.map