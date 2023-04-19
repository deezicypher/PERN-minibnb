import express from 'express';
import userRoute from './routes/users.routes';

const app = express();
app.use(express.json({limit:'50mb'}));


app.use('/api/v1/users', userRoute)


app.listen(8000,()=>{
    console.log(`⚡️[server]:  Server is running at 8000`);
})
