import mongoose from "mongoose";
 
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shivverma:shiv123@cluster0.o0mn0ks.mongodb.net/Food-Del').then(()=>console.log("DB Connected"));
}