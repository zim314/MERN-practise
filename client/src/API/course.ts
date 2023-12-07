import basicFatch from './basic';
import getCurrentUser from 'utils/getCurrentUser';

const path = 'http://localhost:4545/api/courses';

interface CourseInfo {
    title: string;
    description: string;
    price: string;
}

export const createCourseAPI = async (courseInfo: CourseInfo) => {
    const token = localStorage.getItem('user') ? getCurrentUser().token : null;
    const params = {
        method: 'POST',
        body: JSON.stringify(courseInfo),
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token,
        }),
    };
    const res = await basicFatch(path, params);
    return res;
};

export const useIDSreachCourseAPI = async (courseID?: string) => {
    const token = localStorage.getItem('user') ? getCurrentUser().token : null;
    const params = {
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token,
        }),
    };
    const res = await basicFatch(
        courseID ? path + `/${courseID}` : path,
        params
    );
    return res;
};

export const useKeywordSreachCourseAPI = async (keyword: string) => {
    const token = localStorage.getItem('user') ? getCurrentUser().token : null;
    const params = {
        method: 'POST',
        body: JSON.stringify({ keyword }),
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token,
        }),
    };

    console.log('@', params);

    const res = await basicFatch(path, params);
    return res;
};

export const getInstructorOrStudentACourseAPI = async (
    identities: string,
    ID: string
) => {
    const url = path + `/${identities}/${ID}`;
    const token = localStorage.getItem('user') ? getCurrentUser().token : null;
    const params = {
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: token,
        }),
    };
    const res = await basicFatch(url, params);
    return res;
};
