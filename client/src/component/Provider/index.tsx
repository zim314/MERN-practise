import { createContext, useState, useEffect } from 'react';
import getCurrentUser from '../../utils/getCurrentUser';

export const UserInfoContext = createContext<{
    userInfo: any;
    setUserInfo: React.Dispatch<any>;
} | null>(null);

const Provider = ({ children }: any) => {
    const [userInfo, setUserInfo] = useState(getCurrentUser());

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
};

export default Provider;
