import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://quiz-app-f6nb.onrender.com/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;

