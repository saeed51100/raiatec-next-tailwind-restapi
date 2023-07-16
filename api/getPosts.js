// api/getPost.js  (api folder in root of directory)
import swr from "swr";

const getPosts = () => {
    const url = "http://localhost/test.raiatec.com/wp-json/wp/v2/posts";
    return swr(url, {
        cache: true,
        revalidateOnMount: true,
    });
};

export default getPosts;


