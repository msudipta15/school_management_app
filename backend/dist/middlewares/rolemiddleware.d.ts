import type { Request, Response, NextFunction } from "express";
interface AuthRequest extends Request {
    role: string;
}
export declare const authorizerole: (...allowedRoles: string[]) => (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=rolemiddleware.d.ts.map