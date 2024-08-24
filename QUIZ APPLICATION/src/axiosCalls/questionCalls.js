import  axiosInstance  from "./axiosInstance";

export const getQuestions = async (quiz_id, difficulty) => {
    console.log('quiz_id', quiz_id);
    console.log('difficulty', difficulty);

    try {
        console.log('request reached for getting questions of particular difficulty');
        const response = await axiosInstance.get(`/questions/${quiz_id}/${difficulty}`);
        return response.data;
    }
    catch (error) {
        console.log('Unable to fetch question', error);
        return null;
    }

}