import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
    console.log('進入auth router');
    next();
});

router.get('/test', (req, res) => {
    res.send('hihi');
});

export default router;
