// pages/posts.js
import React from 'react';

import api from '../utils/api';

const PostsPage = ({ posts }) => {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export async function getServerSideProps() {
    const posts = await api('wp/v2/posts');
    return {
        props: {
            posts,
        },
    };
}

export default PostsPage;