import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose
    .connect('mongodb://localhost:27017/MERN-practise')
    .then(() => console.log('以連接到 Mongo DB'));

app.get('/', (req, res) => res.send('歡迎來到首頁'));

app.listen(4545, () => console.log('目前正在聆聽 post: 4545'));
