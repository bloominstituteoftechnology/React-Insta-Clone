import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';


class PostContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            likes: props.posts.likes,
            posts: props.posts
        }
    }
    
    likesIncrement = () => {
        this.setState({likes: this.state.likes+1})
    }

    render() { 
       
        return (
            <div className="post-container">
            
                <Post
                    username={this.state.posts.username}
                    thumbnailUrl={this.state.posts.thumbnailUrl}
                    imageUrl={this.state.posts.imageUrl}
                    likes={this.state.likes}
                    increaseLike={this.likesIncrement}
                />
                <CommentSection 
                    posts={this.state.posts}
                />
            </div>
        )
    }
}

 
export default PostContainer;