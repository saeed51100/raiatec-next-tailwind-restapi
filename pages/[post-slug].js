// pages/[post-slug].js
import { useRouter } from "next/router";
import { usePostBySlug } from "api/useApi"; // Import the custom hook
import ScrollToTopButton from "components/scroll-to-top";
import Custom404 from "pages/404"; // Import the custom 404 page

const SinglePostPage = () => {
  const router = useRouter();
  const { post, isLoading, isError } = usePostBySlug(router.query["post-slug"]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !post) {
    // Render the custom 404 page
    return <Custom404 />;
  }

  return (
    <div
      className="bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 shadow-md md:rounded-xl p-4 md:p-8 lg:m-8 md:m-4">
      <h1 className="text-center md:text-2xl text-xl font-bold p-4 lg:p-10">
        {post.title.rendered}
      </h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
      <ScrollToTopButton />
    </div>
  );
};

export default SinglePostPage;
