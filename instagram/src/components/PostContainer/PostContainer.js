import React, { Component } from 'react';
import styled from 'styled-components';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';

const PostContainerWrap = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0 5px 10px 5px;
`

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
            <PostContainerWrap>
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
            </PostContainerWrap>
        )
    }
}

 
export default PostContainer;