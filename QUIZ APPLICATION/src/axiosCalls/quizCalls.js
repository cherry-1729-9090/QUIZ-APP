const {axiosInstance} = require('./axiosInstance');

export const getQuizzes = async() =>{
    try{
        const response = await axiosInstance.get('/getAllQuizzes');
        return response.data;
    }catch(error){
        console.log('Unable to get quizzes', error);
        return null;
    }
}