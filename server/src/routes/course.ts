import express from 'express';
import { Course } from '../models/index';
import { User } from '../models/user';
import { courseValidation } from '../validation';

const router = express.Router();

router.use((req, res, next) => {
    console.log('進入course router');
    next();
});

router.get('/:_id?', async (req, res) => {
    const { _id } = req.params;
    try {
        const courseFound = await Course.find(_id ? { _id } : {})
            .populate('instructor', ['username', 'email'])
            .exec();
        res.send(courseFound);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async (req, res) => {
    const { error } = courseValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if ((req.user as User).isStudent())
        return res.status(400).send('請登入講師帳號後再註冊課程');

    const { title, description, price } = req.body;
    try {
        const newCourse = new Course({
            title,
            description,
            price,
            instructor: (req.user as User)._id,
        });
        const savedCoure = await newCourse.save();
        res.send({
            message: '課程註冊成功',
            savedCoure,
        });
    } catch {
        res.status(500).send('課程註冊失敗');
    }
});

export default router;
