// components/grid/index.js

import {getPosts} from "api/getPosts";


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
                    {post.title.rendered}
                </div>
            ))}
        </div>
    );
};

export default HomePage;
