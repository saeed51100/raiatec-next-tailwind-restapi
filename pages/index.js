import axios from 'axios';

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

const posts = await getPosts();

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.id}>{post.title.rendered}</h2>
      ))}
    </div>
  );
};

export default Posts;