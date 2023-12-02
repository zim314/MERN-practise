export const path = 'http://localhost:4545/api/';

interface Params {
    method: string;
    headers?: any;
    body?: any;
    token?: string;
}

export const basicFatch = async (url: string, params?: Params) => {
    try {
        const res = await (params ? fetch(url, params) : fetch(url));
        return res.json();
    } catch (error) {
        console.log('API ERROR', error);
    }
};
