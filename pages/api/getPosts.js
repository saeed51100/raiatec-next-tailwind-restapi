// api/getPosts.js
import axios from 'axios';

const getPosts = async () => {
    const response = await axios.get('http://localhost/test.raiatec.com/wp-json/wp/v2/posts', {
        params: {
            per_page: 20,
        },
    });

    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};
export default getPosts;