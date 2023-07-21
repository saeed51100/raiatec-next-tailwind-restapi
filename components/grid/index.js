// components/grid/index.js
import useSWR from 'swr';
import getPosts from 'api/getPosts';

const Posts = () => {
    const {data, error, isLoading} = useSWR(
        'http://localhost/test.raiatec.com/wp-json/wp/v2/posts',
        getPosts,
        {
            revalidate: 10000,
            staleWhileRevalidate: true,
            defer: true,
        } // This part has been added for optimization. please control it later. saeed.doc
    );

    if (error) {
        return <div>Error fetching posts</div>;
    } else if (isLoading) {
        return <div>Loading posts...</div>;
    } else {
        return (
            <div>
                {data.map((post) => (
                    <h2 key={post.id}>
                        {post.title.rendered}
                    </h2>
                ))}
            </div>
        );
    }
};

export default Posts;
