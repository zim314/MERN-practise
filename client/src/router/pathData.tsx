import BasicLayout from '../layout/BasicLayout';
import Home from '../page/Home';

const pathData = [
    {
        element: <BasicLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
];

export default pathData;
