import type { Request, Response, NextFunction } from "express";
interface AuthenticationRequest extends Request {
    userid?: string;
    role?: string;
}
export declare const authmiddleware: (req: AuthenticationRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export {};
//# sourceMappingURL=authmiddleware.d.ts.map