import axios from 'axios';
import useSWR from 'swr';

const apiUrl = 'http://localhost/test.raiatec.com/wp-json/wp/v2/posts';

const getPosts = async () => {
    const response = await axios.get(apiUrl, {
        params: {
            per_page: 20,
        },
    });

    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.statusText);
    }
};

const Posts = () => {
    const {data, error, isLoading} = useSWR(
        apiUrl,
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
