import type { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  role: string;
}

export const authorizerole = (...allowedRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!allowedRoles || !allowedRoles.includes(req.role)) {
      return res.status(403).json({ msg: "Access denied !" });
    }
    next();
  };
};
