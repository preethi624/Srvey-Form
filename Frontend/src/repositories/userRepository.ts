const API_BASE_URL = `${import.meta.env.VITE_REACT_APP_API_BASE_URL}`;
import { AxiosError } from "axios";

import axios from "axios";
export interface UserFormData {
  name: string;
  gender: string;
  nationality: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}



export const userSubmit=async(formData:UserFormData)=>{
    try {
         const response=await axios.post(`${API_BASE_URL}/userForm`,formData)
   
    
    return response.data
        
    } catch (error) {
        const axiosError = error as AxiosError;
    throw axiosError.response?.data || axiosError.message;
    }
}


export const userRepository= {
  userSubmit,
 
};
