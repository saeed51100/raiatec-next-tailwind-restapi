import React from 'react';
import { getPost } from './api';

const Post = ({ slug }) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await getPost(slug);
            setPost(response.data);
        };

        fetchPost();
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

export default Post;