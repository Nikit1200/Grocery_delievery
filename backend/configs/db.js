import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is missing. Check backend/.env');
        }

        mongoose.connection.on('connected',()=> console.log('Database connected'));
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDB;
