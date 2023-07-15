import React from 'react';
import { useEffect } from 'react';
import { getPosts } from '~/api';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await getPosts();
            setPosts(response.data);
        };

        fetchPosts();
    }, []);

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    );
};

export default Posts;
