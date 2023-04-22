import express from 'express';
import userRoute from './routes/users.routes';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();
app.use(cookieParser())

app.use(express.json({limit:'50mb'}));
if(process.env.NODE_ENV === 'dev'){
    app.use(cors({
        credentials: true,
        origin:process.env.CLIENT_URL
    }))
}


app.use('/api/v1/users', userRoute)


app.listen(8000,()=>{
    console.log(`⚡️[server]:  Server is running at 8000`);
})
