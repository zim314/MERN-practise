import basicFatch from './basic';
import getCurrentUser from 'utils/getCurrentUser';

const path = 'http://localhost:4545/api/courses/';

interface CourseInfo {
    title: string;
    description: string;
    price: string;
}

export const createCourseAPI = async (courseInfo: CourseInfo) => {
    const token = localStorage.getItem('user') ? getCurrentUser().token : null;
    const params = token
        ? {
              method: 'POSE',
              body: JSON.stringify(courseInfo),
              token,
          }
        : {
              method: 'POSE',
              body: JSON.stringify(courseInfo),
          };
    const res = await basicFatch(path, params);
    return res;
};

export const searchInstructorACourseAPI = async (instructorID: string) => {
    const url = path + `instructor/${instructorID}`;
    const token = localStorage.getItem('user') ? getCurrentUser().token : null;
    const params = {
        method: 'POSE',
        token,
    };

    const res = await basicFatch(url, params);
    return res;
};
