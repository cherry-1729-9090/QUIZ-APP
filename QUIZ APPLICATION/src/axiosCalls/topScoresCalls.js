import axiosInstance from './axiosInstance';
export const getTopScores = async (user_id) => {
    console.log('user_id', user_id);
    try {
        const response = await axiosInstance.get(`/topscores/${user_id}`);
        return response.data;
    }
    catch (error) {
        console.log('Unable to fetch top scores', error);
        return null;
    }
}

export const updateTopScores = async (user_id, quiz_id, score) => {
    try {
        const response = await axiosInstance.post('/topscores/update', { user_id, quiz_id, score });
        return response.data;
    }
    catch (error) {
        console.log('Unable to update top scores', error);
        return null;
    }
}
