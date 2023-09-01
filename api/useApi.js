// api/usePosts.js

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Function to fetch post titles
export function usePosts() {
  const apiUrl = `${API_URL}/posts?per_page=20&_embed`;
  const { data, error } = useSWR(apiUrl, fetcher);
  return {
    posts: data,
    isLoading: !error && !data,
    isError: error
  };
}

// Function to fetch a single post by its slug
export function usePostBySlug(slug) {
  const apiUrl = `${API_URL}/posts?slug=${slug}`;
  const { data, error } = useSWR(apiUrl, fetcher);

  return {
    post: data && data[0], // Assuming the slug is unique, so we take the first post found
    isLoading: !error && !data,
    isError: error
  };
}

// Function to fetch categories
export function useCategories() {
  const apiUrl = `${API_URL}/categories?per_page=20`;
  const { data, error } = useSWR(apiUrl, fetcher);
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  };
}

// Function to fetch search result
export function useSearch(keyword) {
  const apiUrl = `${API_URL}/posts?search=${encodeURIComponent(keyword)}`;
  const { data, error } = useSWR(apiUrl, fetcher);

  return {
    results: data,
    isLoading: !error && !data,
    isError: error
  };
}

// Function to fetch posts Grid
export function usePostsGrid() {
  const apiUrl = `${API_URL}/posts?per_page=20&_embed&include=6230,5947,4075,3341,2665,1609,2806,1032,946,473,404,14`;
  const { data, error } = useSWR(apiUrl, fetcher);
  return {
    posts: data,
    isLoading: !error && !data,
    isError: error
  };
}