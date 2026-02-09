const API_BASE_URL = `${import.meta.env.VITE_REACT_APP_API_BASE_URL}`;
import { AxiosError } from "axios";

import axios from "axios";


export const adminLogin=async(username:string,password:string)=>{
  try {
    const response=await axios.post(`${API_BASE_URL}/login`,{username,password})
    const {token,admin}=response.data;
    localStorage.setItem("adminToken",token)
     localStorage.setItem("adminInfo", JSON.stringify(admin));
    return response.data
    
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data || axiosError.message;
    
  }

}
export const getDatas=async(page=1,limit=10,search:string,gender:string)=>{
  try {
    const token=localStorage.getItem("adminToken")
    console.log("token",token)
    const response = await axios.get(API_BASE_URL, {
      params: {
        page,
        limit,
        search,
        gender,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data
    
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data || axiosError.message;
  }
}

export const adminRepository= {
  adminLogin,
  getDatas
};
