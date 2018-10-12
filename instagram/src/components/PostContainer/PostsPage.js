import React, { Component } from 'react';
// import Search from './components/SearchBar/Search.js';
import PostContainer from './PostContainer';
class PostsPage extends Component {
    
    render() {
        console.log(this.props.data);
        return (
            <div>
                  {this.props.data.map(post => <PostContainer key={post.timestamp} card={post} />)}
            </div>
        );
    }
}

export default PostsPage;
