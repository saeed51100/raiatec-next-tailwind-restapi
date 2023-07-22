// components/grid/index.js

import {getPosts} from "api/getPosts";
import Link from "next/link"; // Import the Link component from Next.js

const HomePage = () => {
    const {posts, isLoading, isError} = getPosts();

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

export default HomePage;
