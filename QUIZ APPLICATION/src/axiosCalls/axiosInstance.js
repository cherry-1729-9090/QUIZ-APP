import axios from 'axios';
const token = localStorage.getItem('token')
console.log('Token:', token);
const axiosInstance = axios.create({
    baseURL: 'https://quiz-app-l3lc.onrender.com/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

export default axiosInstance;

