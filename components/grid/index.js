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
          {/* Wrap the title with Link component */}
          <Link legacyBehavior href={`/pages/${post.slug}`}>
            <a>{post.title.rendered}</a>
          </Link>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
