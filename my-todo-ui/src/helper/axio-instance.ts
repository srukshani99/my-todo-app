import axios from "axios";

const axioInstance = axios.create();

axioInstance.interceptors.request.use((req: any) => {
    req.headers['Content-Type'] = 'application/json';
    return req;
},
    error => {
        return Promise.reject(error);
    });

axioInstance.interceptors.response.use((res: any) => { return res },
    error => {
        return Promise.reject(error);
    }
);
export default axioInstance;