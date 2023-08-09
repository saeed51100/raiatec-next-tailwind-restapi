// components/list-of-posts.jsx

import {usePosts, useCategories} from "api/usePosts"; // Import the custom hook
import Link from "next/link";

const ListOfPost = ({onClose}) => {
  const { posts, isLoading: isLoadingPosts, isError: isErrorPosts } = usePosts(); // Use the custom hook for posts
  const { categories, isLoading: isLoadingCategories, isError: isErrorCategories } = useCategories(); // Use the custom hook for categories

  if (isLoadingPosts || isLoadingCategories) {
        return <div>Loading...</div>;
    }

  if (isErrorPosts || isErrorCategories) {
    return <div>Error loading data.</div>;
    }

    return (
        <>
            <div>
                {categories.map((category) => (
                    <div key={category.id} className="my-2 bg-red-200">
                        {category.name}
                    </div>
                ))}
            </div>

            <div>
                {posts.map((post) => (
                    <div key={post.id} className="my-2">
                        <Link href={`/${post.slug}`} onClick={onClose}>
                            {post.title.rendered}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListOfPost;
