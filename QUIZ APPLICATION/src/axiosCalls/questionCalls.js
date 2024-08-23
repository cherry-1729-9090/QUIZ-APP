import { axiosInstance } from "./axiosInstance";

export const getQuestions = async (quiz_id, difficulty) => {
    try {
        const response = await axiosInstance.get(`/questions/${quiz_id}/${difficulty}`);
    }
    catch (error) {
        console.log('Unable to fetch question', error);
        return null;
    }

}