import axios from 'axios';

const url = 'http://localhost:3333/topic'

export const postTopic = (data) => {
    return axios.post(url, data);
}