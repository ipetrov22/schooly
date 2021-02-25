import axios from 'axios';

const url = 'https://schooly-noit.herokuapp.com';

export const postTopic = (data) => {
    try {
        return axios.post(`${url}/topic/create`, data);
    }
    catch (error) {
        console.log(error.message);
    }
}

export const getAllTopics = () => {
    return axios.get(`${url}/topic/getAll`);
}

export const getOneTopic = (id) => {
    return axios.get(`${url}/topic/getOne`, { params: { id } });
};