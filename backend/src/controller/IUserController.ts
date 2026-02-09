import { Request,Response } from "express";
export interface IUserController{
    formSubmit(req:Request,res:Response):Promise<void>
}