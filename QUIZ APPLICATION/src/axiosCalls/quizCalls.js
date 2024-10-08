import axiosInstance from './axiosInstance';

export const getQuizzes = async() =>{
    try{
        const response = await axiosInstance.get('/quizzes/getAllQuizzes');
        return response.data;
    }catch(error){
        console.log('Unable to get quizzes', error);
        return null;
    }
}