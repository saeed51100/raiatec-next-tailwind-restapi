// pages/[post-slug].js

import {useRouter} from 'next/router';
import {usePostBySlug} from 'api/useApi'; // Import the custom hook

const SinglePostPage = () => {
    const router = useRouter();
    const {post, isLoading, isError} = usePostBySlug(router.query['post-slug']); // Use the custom hook with the dynamic slug from the router

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !post) {
        return <div>Error loading the post.</div>;
    }

    return (
        <div className="bg-white">
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
        </div>
    );
};

export default SinglePostPage;

