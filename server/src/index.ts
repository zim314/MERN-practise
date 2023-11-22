import express from 'express';
import mongoose from 'mongoose';
import { authRoute } from './routes/index';

const app = express();

mongoose
    .connect('mongodb://localhost:27017/MERN-practise')
    .then(() => console.log('已連接到 Mongo DB'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', authRoute);

app.get('/', (req, res) => res.send('歡迎來到首頁'));

app.listen(4545, () => console.log('目前正在聆聽 post: 4545'));
