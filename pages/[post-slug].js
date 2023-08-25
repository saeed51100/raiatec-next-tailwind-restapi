// pages/[post-slug].js

import { useRouter } from "next/router";
import { usePostBySlug } from "api/useApi"; // Import the custom hook

const SinglePostPage = () => {
  const router = useRouter();
  const { post, isLoading, isError } = usePostBySlug(router.query["post-slug"]); // Use the custom hook with the dynamic slug from the router

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !post) {
    return <div>Error loading the post.</div>;
  }

  return (
    <div className="bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 shadow-md md:rounded-xl p-4 md:p-8 lg:m-8 md:m-4">
      <h1 className="text-center md:text-2xl text-xl font-bold p-4 lg:p-10">{post.title.rendered}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>

  );
};

export default SinglePostPage;

