import axios from 'axios';

const url = 'http://localhost:3333';

export const postTopic = (data) => {
    try {
        return axios.post(`${url}/topic/create`, data);
    }
    catch(error) {
        console.log(error.message);
    }
}

export const getAllTopics = async () => {
    try {
        return await axios.get(`${url}/topic/getAll`);
    }
    catch(error) {
        console.log(error);
    }
}

export const getOneTopic = async (id) => {
    try {
        return axios.get(`${url}/topic/getOne`, { params: { id } });
    }
    catch(error) {
        console.log(error);
    }
}