import axios from 'axios';
const token = localStorage.getItem('token')
console.log('Token:', token);
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

export default axiosInstance;

