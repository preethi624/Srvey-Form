import express from "express";
import { adminController } from "../container/admindi";
import { adminAuth } from "../middleware/adminAuth";



const router = express.Router();


router.post(
  "/login",
  
  adminController.adminLogin.bind(adminController)
);
router.get("/",adminAuth, adminController.getDatas.bind(adminController))

export default router;
