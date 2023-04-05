import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173/'
}))

app.get('/', (req, res) => {
    res.json('Welcome')
})


app.listen(8000)