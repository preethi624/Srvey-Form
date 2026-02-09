import { IUserForm } from "../interface/IUserForm";

export interface IUserService{
    submitForm(data:IUserForm):Promise<{success:boolean,message:string}>
}