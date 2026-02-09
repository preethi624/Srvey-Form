import { ISurvey } from "../models/survey";

export interface IUserForm {
  name: string;
  gender: string;
  nationality: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}
export interface ISurveyForm{
    data:ISurvey[];
    total:number;
    totalPages:number;
    currentPage:number

}