import { ISurveyForm } from "../interface/IUserForm";
import AdminModel, { IAdmin } from "../models/admin";
import { ISurvey, SurveyModel } from "../models/survey";
import { IAdminRepositry } from "./IAdminRepository";

export class AdminRepository implements IAdminRepositry{
    async adminLogin(username:string):Promise<IAdmin|null>{
        return await AdminModel.findOne({username})

    }
   async getDatas(page: number, limit: number, search: string, gender: string): Promise<ISurveyForm | null> {
  
    const skip=(page-1)*limit 
    const query: any = {};
     if (search) 
        { query.$or = [ { name: { $regex: search, $options: "i" } }, { email: { $regex: search, $options: "i" } }, { nationality: { $regex: search, $options: "i" } } ]; } 
     if (gender && gender !== "all") { query.gender = gender.toLowerCase(); } 
     const data =await SurveyModel.find(query).sort({createdAt:-1}).skip(skip).limit(limit).lean(); 
   
     const total=await SurveyModel.countDocuments(query); 
     const totalPages = Math.ceil(total / limit) 
     return{data,total,totalPages,currentPage:page}
       
   }
}