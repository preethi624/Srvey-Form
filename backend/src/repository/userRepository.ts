import { IUserForm } from "../interface/IUserForm";
import { ISurvey, SurveyModel } from "../models/survey";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository{
    async formSubmit(data:IUserForm):Promise<ISurvey>{
        return await SurveyModel.create(data)

    }
}