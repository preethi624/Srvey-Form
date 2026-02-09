import { AdminController } from "../controller/adminController";
import { AdminRepository } from "../repository/AdminRepository";
import { AdminService } from "../services/adminService";


const adminRepository=new AdminRepository();
const adminService=new AdminService(adminRepository);
export const adminController=new AdminController(adminService)