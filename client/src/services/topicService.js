import axios from 'axios';

const url = 'http://localhost:3333';

export const postTopic = (data) => {
    return axios.post(`${url}/topic/create`, data);
}

export const getAllTopics = async () => {
    try {
        return await axios.get(`${url}/topic/getAll`);
    }
    catch(error) {
        console.log(error);
    }
}