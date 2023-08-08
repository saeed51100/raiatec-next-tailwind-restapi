// components/list-of-post.jsx

import {usePosts} from "api/usePosts"; // Import the custom hook
import Link from "next/link";

const ListOfPost = ({onClose}) => {
    const {posts, isLoading, isError} = usePosts(); // Use the custom hook

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading posts.</div>;
    }

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="my-2">
                    <Link href={`/${post.slug}`} onClick={onClose}>
                        {post.title.rendered}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ListOfPost;
