// components/grid/index.js

const Grid = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
            ))}
        </div>
    );
};

export default Grid;
