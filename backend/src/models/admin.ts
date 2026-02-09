import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IAdmin extends Document{
    username:string;
    password:string
}
const adminSchema=new Schema<IAdmin>(
    {
        username:{type:String,required:true,unique:true},
        password:{type:String,required:true}
    },
    {timestamps:true}
)
adminSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
const AdminModel= mongoose.model<IAdmin>("Admin",adminSchema)

export default AdminModel