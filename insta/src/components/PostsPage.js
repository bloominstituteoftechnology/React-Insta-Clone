import React, { Component } from 'react';
import PostContainer from './PostContainer';

class PostsPage extends Component {
    render() {
        return (
            <PostContainer
                posts={this.props.posts} 
                likes={this.props.likes} 
                commentInput={this.props.commentInput} 
                handleSubmit={this.props.handleSubmit} 
                addNewComment={this.props.addNewComment} 
                newLike={this.props.newLike}  
            />
        )
    }
}

export default PostsPage;