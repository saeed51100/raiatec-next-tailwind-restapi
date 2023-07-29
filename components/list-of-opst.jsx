// components/grid/index.js

import {usePosts} from "api/usePosts"; // Import the custom hook
import Link from "next/link";

const ListOfPost = () => {
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
                <div key={post.id}>

                    <Link href={`/${post.slug}`}>
                        {post.title.rendered}
                    </Link>

                </div>
            ))}
        </div>
    );
};

export default ListOfPost;
