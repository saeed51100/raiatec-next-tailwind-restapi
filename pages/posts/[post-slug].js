import React from "react";
import { useState } from "react";
import { getPost } from "~/api/getPost";
import { useEffect } from "react";

const PostPage = ({ slug }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPost(slug).then((data) => {
            setPost(data.post);
        });
    }, [slug]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostPage;
