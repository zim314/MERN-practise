import BasicLayout from '../layout/BasicLayout';
import Home from '../page/Home';
import Register from '../page/Register';
import Login from '../page/Login';

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
        ],
    },
];

export default pathData;
