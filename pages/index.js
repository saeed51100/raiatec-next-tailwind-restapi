// pages/index.js

import Grid from '../components/grid';
import { getPosts } from '../api/getPosts';

const HomePage = () => {
    const { posts, isLoading, isError } = getPosts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading posts.</div>;
    }

    return (
        <div>
            <h1>WordPress Posts</h1>
            <Grid posts={posts} />
        </div>
    );
};

export default HomePage;

