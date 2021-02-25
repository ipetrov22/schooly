import axios from 'axios';

const url = 'https://schooly-noit.herokuapp.com';

export const postComment = (data) => {
    try {
        return axios.post(`${url}/comment/create`, data);
    } catch (error) {
        console.log(error);
    }
}