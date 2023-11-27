import express from 'express';
import { user as User } from '../models/index';
import { userValidation, loginValidation } from '../validation';
import jwt from 'jsonwebtoken';

const PASSWORD_SECRET = '今天的點心是珍煮丹';
const router = express.Router();

router.use((req, res, next) => {
    console.log('進入auth router');
    next();
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
        res.send(`註冊成功，註冊內容為：${savedUser}`);
    } catch (error) {
        res.status(500).send('註冊失敗');
    }
});

router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) return res.status(401).send('無此使用者信箱，請重新輸入');

    foundUser.comparePassword(
        req.body.password,
        (error: string, isMatch: boolean) => {
            if (error) return res.status(500).send(error);

            if (isMatch) {
                const tokenObject = {
                    _id: foundUser._id,
                    email: foundUser.email,
                };
                const token = jwt.sign(tokenObject, PASSWORD_SECRET);

                return res.send({
                    message: '登入成功',
                    token: 'JWT ' + token,
                    user: foundUser,
                });
            } else return res.status(401).send('密碼錯誤');
        }
    );
});

export default router;
