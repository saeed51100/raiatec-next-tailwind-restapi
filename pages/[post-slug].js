// <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

// pages/[post-slug].js
import { useRouter } from 'next/router';
import { usePosts } from '../api/usePosts';

export default function PostPage() {
    const router = useRouter();
    const { postSlug } = router.query;

    const { posts, isLoading, isError } = usePosts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching data.</div>;
    }

    const post = posts.find((post) => post.slug === postSlug);

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <div>
            <h1>{post.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    );
}
