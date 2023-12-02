import { basicFatch, path } from 'API';

interface User {
    username: string;
    password: string;
    email: string;
    role: string;
}

export const register = async (user: User) => {
    const url = path + 'user/register';
    const params = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
    };
    const res = await basicFatch(url, params);
    return res;
};

export const login = async () => {};

export const logout = async () => {};
