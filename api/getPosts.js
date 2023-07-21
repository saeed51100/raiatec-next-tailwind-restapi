// api/getPosts.js
import useSWR from 'swr';

const fetcher = async (url) => {
    const res = await fetch(url);
    return await res.json();
};

export function getPosts() {
    const apiUrl = 'http://localhost/test.raiatec.com/wp-json/wp/v2/posts';
    const { data, error } = useSWR(apiUrl, fetcher);

    return {
        posts: data,
        isLoading: !error && !data,
        isError: error,
    };
}
