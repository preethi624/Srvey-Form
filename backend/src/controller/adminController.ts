import { Request, Response } from "express";
import { IAdminService } from "../services/IAdminService";
import { IAdminController } from "./IAdminController";
import { httpStatus } from "../constants/httpStatus";
import { Messages } from "../constants/messages";
export class AdminController implements IAdminController{
    constructor(private _adminService:IAdminService){}
    async  adminLogin(req:Request,res:Response):Promise<void>{
        try {
            const {username,password}=req.body;
            if(!username||!password){
                res.status(httpStatus.BAD_REQUEST).json(Messages.REQUIRED_USERNAME_PASSWORD)
                return
            }
            const result=await this._adminService.loginAdmin(username,password)
            res.status(httpStatus.OK).json({message:Messages.LOGIN_SUCCESS,token:result.token,admin:result.admin})
            
        } catch (error:any) {
            res
          .status(httpStatus.UNAUTHORIZED)
          .json({ message: error.message || Messages.LOGIN_FAILED });
        }
    }
    async getDatas(req:Request,res:Response):Promise<void>{
        try {
            const page=Number(req.query.page)||1
            const limit=Number(req.query.limit)||10
             const search = (req.query.search as string) || "";
        const gender = (req.query.gender as string) || "all";

            const result=await this._adminService.datasGet(page,limit,search,gender);
            if(result.success){
                res.json({sucess:true,data:result.data,total:result.total,totalPages:result.totalPages,currentPage:result.currentPage})
            }
            
        } catch (error) {
            
        }
    }
}