// components/list-of-posts.jsx
import {usePosts, useCategories} from "api/useApi";
import Link from "next/link";

const ListOfPost = ({onClose}) => {
    const {posts, isLoading: isLoadingPosts, isError: isErrorPosts} = usePosts();
    const {categories, isLoading: isLoadingCategories, isError: isErrorCategories} = useCategories();

    if (isLoadingPosts || isLoadingCategories) {
        return <div>Loading...</div>;
    }

    if (isErrorPosts || isErrorCategories) {
        return <div>Error loading data.</div>;
    }

    // Create a Set to track unique category names
    const uniqueCategoryNames = new Set();

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="my-2">
                    {post.categories.length === 0 ? (
                        <Link href={`/${post.slug}`} onClick={onClose}>
                            {post.title.rendered}
                        </Link>
                    ) : (
                        post.categories.map((categoryId) => {
                            const category = categories.find((cat) => cat.id === categoryId);

                            if (!uniqueCategoryNames.has(category.name)) {
                                uniqueCategoryNames.add(category.name);
                                return (
                                    <div key={category.id}>
                                        <div className="bg-green-200">
                                            {category.name}
                                        </div>

                                        {/* related Post title */}
                                        <ul className="pl-4">
                                            {posts.map((post) => (
                                                post.categories.includes(category.id) && (
                                                    <li key={post.id} >
                                                        <Link href={`/${post.slug}`} onClick={onClose}>
                                                            {post.title.rendered}
                                                        </Link>
                                                    </li>
                                                )
                                            ))}
                                        </ul>
                                    </div>
                                );
                            }

                            return null; // Category name already displayed, don't render
                        })
                    )}
                </div>
            ))}
        </div>
    );
};

export default ListOfPost;
