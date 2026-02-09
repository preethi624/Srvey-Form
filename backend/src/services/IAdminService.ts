import { IDatas } from "../interface/IDatas"

export interface IAdminService{
  loginAdmin(username:string,password:string):Promise<{token:string,admin:{id:string,username:string}}>
  datasGet(page:number,limit:number,search:string,gender:string):Promise<IDatas>

}