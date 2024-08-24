import  axiosInstance  from "./axiosInstance";

export const registerUser = async (user) => {
    try {
        const response = await axiosInstance.post('/users/register', user);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Server responded with an error:', error.response.data);
            return error.response.data; 
        } else if (error.request) {
            console.error('No response received:', error.request);
            return { message: 'No response from server' };
        } else {
            console.error('Error setting up the request:', error.message);
            return { message: 'Error in setting up request' };
        }
    }
};


export const loginUser = async (user) => {
    console.log('user', user);
    try {
        console.log('reached inside loginUser');
        const response = await axiosInstance.post('/users/login', user);
        console.log('response inside', response);
        return response.data;
    }
    catch (error) {
        console.log('Unable to login user', error);
        return null;
    }
}
