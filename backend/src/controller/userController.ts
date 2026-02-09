import { Request,Response } from "express";
import { httpStatus } from "../constants/httpStatus";

import { IUserController } from "./IUserController";
import { IUserService } from "../services/IUserService";

export class UserController implements IUserController{
    constructor(private _userService:IUserService){}
    async formSubmit(req:Request,res:Response):Promise<void>{
        try {
            const {
        name,
        gender,
        nationality,
        email,
        phone,
        address,
        message,
      } = req.body;
      const result = await this._userService.submitForm({
        name,
        gender,
        nationality,
        email,
        phone,
        address,
        message,
      });
      res.status(httpStatus.CREATED).json({
        success: true,
        message: "Form submitted successfully",
        data: result,
      });
            
        } catch (error) {
             res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: "Form submission failed",
      });
        }


    }

}