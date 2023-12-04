import BasicLayout from '../layout/BasicLayout';
import Home from '../page/Home';
import Register from '../page/Register';
import Login from '../page/Login';
import Profile from '../page/Profile';
import { useState } from 'react';

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
        ],
    },
];

export default pathData;
