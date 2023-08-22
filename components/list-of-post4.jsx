// components/list-of-posts.jsx

import { usePosts, useCategories } from "api/useApi";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

import Link from "next/link";

export default function ListOfPost({ onClose }) {
    const {
        posts,
        isLoading: isLoadingPosts,
        isError: isErrorPosts,
    } = usePosts();
    const { isLoading: isLoadingCategories, isError: isErrorCategories } =
        useCategories();

    if (isLoadingPosts || isLoadingCategories) {
        return <div>Loading...</div>;
    }

    if (isErrorPosts || isErrorCategories) {
        return <div>Error loading data.</div>;
    }


    return (
        <div>
            {posts.map((post) => {
                const isActivePost = `/${post.slug}` === window.location.pathname; // Compare the post slug with the current URL

                return (
                    <div key={post.id} className="my-2">
                        <Link
                            href={`/${post.slug}`}
                            onClick={onClose}
                            className={classNames(
                                isActivePost
                                    ? "bg-gray-50 text-indigo-600" // active classes
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" // hover classes
                            )}
                        >
                            <div>{post.title.rendered}</div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
