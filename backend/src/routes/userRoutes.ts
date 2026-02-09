import express from "express";
import { userController } from "../container/userdi";




const router = express.Router();


router.post(
  "/userForm",
  
  userController.formSubmit.bind(userController)
);

export default router;
