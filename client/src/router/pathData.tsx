import BasicLayout from '../layout/BasicLayout';
import Home from '../page/Home';
import Register from '../page/Register';

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
        ],
    },
];

export default pathData;
