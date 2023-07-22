// api/usePosts.js
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export function usePosts() {
    const apiUrl = 'http://localhost/test.raiatec.com/wp-json/wp/v2/posts?per_page=20';
    const { data, error } = useSWR(apiUrl, fetcher);

    return {
        posts: data,
        isLoading: !error && !data,
        isError: error,
    };
}

// Function to fetch a single post by its slug
export async function fetchPostBySlug(slug) {
  const apiUrl = `http://localhost/test.raiatec.com/wp-json/wp/v2/posts?slug=${slug}`;
  const res = await fetch(apiUrl);
  const post = await res.json();
  return post[0]; // Assuming the slug is unique, so we take the first post found
}
