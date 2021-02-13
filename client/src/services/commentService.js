import axios from 'axios';

const url = 'http://localhost:3333';

export const postComment = (data) => {
    try {
        return axios.post(`${url}/comment/create`, data);
    } catch (error) {
        console.log(error);
    }
}