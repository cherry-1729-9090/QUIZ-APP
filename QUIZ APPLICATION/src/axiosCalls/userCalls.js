import { axiosInstance } from "./axiosInstance";

export const registerUser = async (user) => {
    try {
        const response = await axiosInstance.post('/users/register', user);
        return response.data;
    }
    catch (error) {
        console.log('Unable to register user', error);
        return null;
    }
}


export const loginUser = async (user) => {
    try {
        const response = await axiosInstance.post('/users/login', user);
        return response.data;
    }
    catch (error) {
        console.log('Unable to login user', error);
        return null;
    }
}
