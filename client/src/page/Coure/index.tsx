import { useContext, useState, useEffect } from 'react';
import { UserInfoContext } from '../../component/Provider';
import { useNavigate } from 'react-router-dom';
import { createCourseAPI, searchInstructorACourseAPI } from '../../API/course';

const index = () => {
    const [course, setCourse] = useState();

    const user = useContext(UserInfoContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if (!user) return;

            const userInfo = user?.userInfo.user;
            if (userInfo.role === 'instructor') {
                const res = await searchInstructorACourseAPI(userInfo._id);

                const xxx = await res?.json();

                console.log('res', xxx);
            }
        })();
    }, []);

    return (
        <div style={{ padding: '3rem' }}>
            {!user?.userInfo && (
                <div>
                    <p>必須登入後才能看到課程</p>
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => navigate('/login')}
                    >
                        回到登入頁面
                    </button>
                </div>
            )}
            {user?.userInfo?.user.role === 'instructor' && (
                <div>
                    <h1>歡迎到講師課程頁面</h1>
                </div>
            )}
            {user?.userInfo?.user.role === 'student' && (
                <div>
                    <h1>歡迎到學生課程頁面</h1>
                </div>
            )}
        </div>
    );
};

export default index;
