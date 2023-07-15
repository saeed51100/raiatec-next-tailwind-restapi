import React from "react";
import { useState } from "react";
import { getPosts } from "api/getPosts";

const IndexPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data.posts);
        });
    }, []);

    return (
        <div>
            <h1>My Blog</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/posts/${post.slug}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IndexPage;
