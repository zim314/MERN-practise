import express from 'express';
import { user as User } from '../models/index';
import { userValidation, loginValidation } from '../validation';

const router = express.Router();

router.use((req, res, next) => {
    console.log('進入auth router');
    next();
});

router.get('/test', (req, res) => {
    res.send('hihi');
});

router.post('/register', async (req, res) => {
    const { error } = userValidation(req.body);
    if (error) res.status(400).send(error.details[0].message);

    const checkEmail = await User.findOne({ email: req.body.email });
    if (checkEmail) res.status(400).send('此信箱已被註冊');

    const { username, password, email, role } = req.body;
    const newUser = new User({ username, password, email, role });
    try {
        const savedUser = await newUser
            .save()
            .catch((error) => console.log(error));
        console.log('新用戶', savedUser);
    } catch (error) {
        res.status(500).send('註冊失敗');
    }
});

export default router;
