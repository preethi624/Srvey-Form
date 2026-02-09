import express from "express";
import cors from "cors";
import adminRoutes from"./routes/adminRoutes"
import userRoutes from "./routes/userRoutes"
const app=express()
app.use(cors());
app.use(express.json())
app.use("/api/v1",adminRoutes);
app.use("/api/v1",userRoutes)
export default app
