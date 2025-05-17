import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://nithinman833:Nithin833@cluster0.zqi32vb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}