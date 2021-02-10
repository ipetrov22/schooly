import axios from 'axios';

const url = 'http://localhost:3333';

export const postTopic = (data) => {
    return axios.post(`${url}/topic/create`, data);
}

export const getAllTopics = () => {
    return axios.get(`${url}/topic/getAll`);
}