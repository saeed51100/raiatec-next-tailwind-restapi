import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        axios.get('http://localhost/test.raiatec.com/wp-json/wp/v2/posts')
            .then(response => {
                this.setState({
                    posts: response.data,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
