import { Request, Response } from "express";
export interface IAdminController{
 adminLogin(req:Request,res:Response):Promise<void>
 getDatas(req:Request,res:Response):Promise<void>
}