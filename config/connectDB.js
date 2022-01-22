import  mongoose  from "mongoose";


const connectDB = async ()=>{
   await  mongoose.connect(process.env.MONGO_URI).then(()=> console.log('Connected to Database'));
}

export default connectDB;