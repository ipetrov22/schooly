import axios from 'axios';

const url = 'http://localhost:3333';

export const postTopic = (data) => {
    return axios.post(`${url}/topic`, data);
}

export const getAllTopics = async () => {
    try {
        await axios.get(url);
    }
    catch(error) {
        console.log(error);
    }
}