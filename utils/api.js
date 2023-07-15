// utils/api.js
import axios from 'axios';

const api = (endpoint) => {
    return axios.get(`http://localhost/test.raiatec.com/wp-json/${endpoint}`);
};

export default api;