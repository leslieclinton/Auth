import dotenv from 'dotenv'
import express from 'express';
import authRouter from './routes/auth.js'

import connectDB from './config/connectDB.js';

dotenv.config();

//Connect Database
connectDB()
const app = express();
app.use(express.json())

//Middlewares
app.use(express.json());
app.use('/api/auth', authRouter)

const PORT = process.env.PORT || 5001
const server= app.listen(PORT, ()=> console.log(`App running on port ${process.env.PORT}`));

process.on('unhandledRejection', (err)=>{
    console.log(`Logged Error : ${err}`);

    server.close(()=> process.exit(1))

})