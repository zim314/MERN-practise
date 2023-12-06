import { useContext, useState, useEffect } from 'react';
import { UserInfoContext } from '../../component/Provider';
import { useNavigate } from 'react-router-dom';
import { getInstructorOrStudentACourseAPI } from '../../API/course';

const index = () => {
    const [courseList, setCourseList] = useState();

    const user = useContext(UserInfoContext);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            if (!user) return;
            const info = user?.userInfo.user;
            const res = await getInstructorOrStudentACourseAPI(
                info.role,
                info._id
            );
            const courseData = await res?.json();
            setCourseList(courseData.coursesFound);
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
            {courseList && (
                <div style={{ display: 'fles', flexWrap: 'wrap' }}>
                    {courseList.map((course: any) => {
                        <div
                            className="card"
                            style={{ width: '18rem', margin: '1rem' }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">
                                    課程名稱：{course.title}
                                </h5>
                                <p
                                    className="card-text"
                                    style={{ margin: '0.5rem 0rem' }}
                                >
                                    {course.description}
                                </p>
                                <p style={{ margin: '0.5rem 0rem' }}>
                                    學生人數：{course.student.length}
                                </p>
                                <p style={{ margin: '0.5rem 0rem' }}>
                                    課程價格：{course.price}
                                </p>
                            </div>
                        </div>;
                    })}
                </div>
            )}
        </div>
    );
};

export default index;
