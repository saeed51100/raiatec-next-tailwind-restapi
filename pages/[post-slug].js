// <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

// pages/[post-slug].js
import { useRouter } from 'next/router';
import { usePostBySlug } from '../api/usePosts';

export default function Post() {
    const router = useRouter();
    console.log("router=", router)
    const { post, isLoading, isError } = usePostBySlug(router.query.postSlug);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading post</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    );
}

