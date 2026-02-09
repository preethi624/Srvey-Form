import { IUserForm } from "../interface/IUserForm";
import { ISurvey } from "../models/survey";

export interface IUserRepository{
    formSubmit(data:IUserForm):Promise<ISurvey>
}