import { Request, } from "express";
import * as jwt from "jsonwebtoken";
import {jwtSecret} from "../config";

export const expressAuthentication = (req: Request, securityName: string, scopes?: string[]) => {
    if (securityName === "bearer") {
        return new Promise((resolve, reject) => {
          const token = req.headers.authorization.replace('Bearer ', '')
          if (!token) {
            reject(new Error("No token provided"));
          }
          jwt.verify(token, jwtSecret, (err: any, decoded: any) => {
            if (err) {
              reject(err);
            } else {
              const scopes = ["email", "email_verified", "first_name", "last_name", "id"]
              for (const scope in scopes) {
                if (!(scopes[scope] in decoded)) {
                  reject(new Error("JWT does not contain required scope."));
                }
              }
              resolve(decoded);
            }
          });
        });
    }
};