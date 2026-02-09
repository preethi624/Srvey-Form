import { IUserForm } from "../interface/IUserForm";
import { IUserRepository } from "../repository/IUserRepository";
import { IUserService } from "./IUserService";

export class UserService implements IUserService{
    constructor(private _userRepository:IUserRepository){}
    async submitForm(data:IUserForm):Promise<{success:boolean,message:string}>{
        try {
            const result=await this._userRepository.formSubmit(data);
        if(result){
            return{success:true,message:"successfully submitted"}
        }else{
              return{success:false,message:"failed to submit"}
        }
        } catch (error) {
            return{success:false,message:"failed to submit"}
            
        }
        

    }

}