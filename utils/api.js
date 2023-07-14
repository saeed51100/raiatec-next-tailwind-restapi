import axios from 'axios';

const api = (endpoint) => {
    return axios.get(`http://localhost/test.raiatec.com/wp-json/wp/v2/${endpoint}`);
};

export default api;