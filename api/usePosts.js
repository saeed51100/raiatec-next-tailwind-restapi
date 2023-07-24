// api/usePosts.js

// Function to fetch post titles
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export function usePosts() {

    // Use the API_URL from .env.local here
    const apiUrl = `${API_URL}/posts?per_page=20`;

    const { data, error } = useSWR(apiUrl, fetcher);

    return {
        posts: data,
        isLoading: !error && !data,
        isError: error,
    };
}

// Function to fetch a single post by its slug using SWR
export function usePostBySlug(slug) {
  const apiUrl = `${API_URL}/posts?slug=${slug}`;
    console.log(apiUrl);
    const { data, error } = useSWR(apiUrl, fetcher);

    return {
        post: data && data[0], // Assuming the slug is unique, so we take the first post found
        isLoading: !error && !data,
        isError: error,
    };
}
