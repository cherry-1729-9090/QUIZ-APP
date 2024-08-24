import axiosInstance from "./axiosInstance";

export const createQuizHistory = async(quiz_id, score) => {
    try {
        const response = await axiosInstance.post('/quizHistory', { quiz_id, score });
        return response.data;
    } catch (error) {
        console.log('Unable to create quiz history', error);
        return null;
    }
}



    