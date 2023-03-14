import axios from 'axios';

const api = axios.create({
    baseURL: `http://api.limitless-connection.com/api/v1/`,
});

export default api;
