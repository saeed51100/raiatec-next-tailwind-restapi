// components/list-of-posts.jsx

import {usePosts, useCategories} from "api/useApi"; // Import the custom hook
import Link from "next/link";

const ListOfPost = ({onClose}) => {
    const {posts, isLoading: isLoadingPosts, isError: isErrorPosts} = usePosts(); // Use the custom hook for posts
    const {categories, isLoading: isLoadingCategories, isError: isErrorCategories} = useCategories(); // Use the custom hook for categories

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
                        {(post.categories.length === 0) ? (
                            <div>{post.title.rendered}</div>
                        ) : (


                            categories.map((category) => (
                                    <div key={category.id} >
                                        <div className="bg-green-200">
                                            {/* category.name of related current post */}
                                        </div>
                                    </div>
                                ))








                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListOfPost;
