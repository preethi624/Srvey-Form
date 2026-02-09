import { UserController } from "../controller/userController";
import { UserRepository } from "../repository/userRepository";
import { UserService } from "../services/userService";


const userRepository=new UserRepository();
const userService=new UserService(userRepository);
export const userController=new UserController(userService)