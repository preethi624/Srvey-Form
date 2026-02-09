import { ISurveyForm } from "../interface/IUserForm";
import { IAdmin } from "../models/admin";
import { ISurvey } from "../models/survey";

export interface IAdminRepositry{
    adminLogin(username:string):Promise<IAdmin|null>
    getDatas(page:number,limit:number,search:string,gender:string):Promise<ISurveyForm|null>

}