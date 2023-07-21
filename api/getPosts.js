// api/getPosts.js
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function getPosts() {
    const apiUrl = 'http://localhost/test.raiatec.com/wp-json/wp/v2/posts?per_page=20';
    const { data, error } = useSWR(apiUrl, fetcher);

    return {
        posts: data,
        isLoading: !error && !data,
        isError: error,
    };
}
