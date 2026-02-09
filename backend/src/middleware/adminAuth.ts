import { NextFunction,Request,Response } from "express";
import dotenv from "dotenv";
import jwt,{JwtPayload} from "jsonwebtoken";
dotenv.config()
interface AdminJwtPayload extends JwtPayload {
  adminId: string;
  role: string;
}


export const adminAuth=(req:Request,res:Response,next:NextFunction)=>{
try {
    const authHeader=req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const token=authHeader.split(" ")[1];
    const decoded=jwt.verify(token,process.env.JWT_KEY!)as unknown as AdminJwtPayload
    (req as any).admin={
        adminId:decoded.adminId,
        role:decoded.role
    }
    next()
    
} catch (error) {
    return res.status(401).json({ message: "Invalid token" });
}
}