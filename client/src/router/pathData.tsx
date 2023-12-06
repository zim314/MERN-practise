import BasicLayout from '../layout/BasicLayout';
import Home from '../page/Home';
import Register from '../page/Register';
import Login from '../page/Login';
import Profile from '../page/Profile';
import Course from '../page/Coure';

const pathData = [
    {
        element: <BasicLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'register',
                element: <Register />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
            {
                path: 'course',
                element: <Course />,
            },
        ],
    },
];

export default pathData;
