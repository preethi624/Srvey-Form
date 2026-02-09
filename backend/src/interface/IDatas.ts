import { ISurvey } from "../models/survey";
import { IUserForm } from "./IUserForm";

export interface IDatas{
    success:boolean,
    data?:ISurvey[]|null;
    total?:number|null;
    totalPages?:number|null;
    currentPage?:number|null
}