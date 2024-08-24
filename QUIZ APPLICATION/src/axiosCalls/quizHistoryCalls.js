import axiosInstance from "./axiosInstance";

export const createQuizHistory = async (userId, quiz_id, score) => {
    try {
        const response = await axiosInstance.post('/quizHistory', { userId, quiz_id, score });
        console.log('Quiz history created successfully', response.data);
        return response.data;
    } catch (error) {
        console.log('Unable to create quiz history', error);
        return null;
    }
}



export const getUserQuizHistory = async (user) => {
    try {
        const response = await axiosInstance.get('/quizHistory/user', { user });
        console.log('User quiz history fetched successfully', response.data);
        return response.data;
    } catch (error) {
        console.log('Unable to fetch user quiz history', error);
        return null;
    }
}