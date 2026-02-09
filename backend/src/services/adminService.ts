import { IAdminRepositry } from "../repository/IAdminRepository";
import { IAdminService } from "./IAdminService";
import jwt from "jsonwebtoken";
import dotenv from"dotenv"
import bcrypt from "bcryptjs";
import { IDatas } from "../interface/IDatas";


export class AdminService implements IAdminService{
    constructor(private _adminRepository:IAdminRepositry){}
    async loginAdmin(username:string,password:string):Promise<{token:string,admin:{id:string,username:string}}>{
        const admin=await this._adminRepository.adminLogin(username);
        if(!admin){
            throw new Error("Invalid credensials")
        }
        const isPasswordMatch = await bcrypt.compare(password, admin.password);
        if (!isPasswordMatch) {
      throw new Error("Invalid credentials");
    }
        const token=jwt.sign({
                adminId: admin._id,
                role: "admin"
            }, process.env.JWT_KEY!,
            { expiresIn: "1d" })
            return {
                 token,
            admin: {
                id: admin._id.toString(),
                username: admin.username
            }
            }


    }
    async datasGet(page:number,limit:number,search:string,gender:string):Promise<IDatas>{
        try {
            const result=await this._adminRepository.getDatas(page,limit,search,gender);
            return{success:true,data:result?.data,total:result?.total,totalPages:result?.totalPages,currentPage:result?.currentPage}
        } catch (error) {
            return{success:false}
            
        }


    }
}