import axios from "axios";

const getPosts = () => {
    const url = "https://raiatec.com/wp-json/wp/v2/posts";
    return axios.get(url);
};

export default getPosts;
