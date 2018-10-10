import React from 'react';
import Post from './Post';
import './Post.css';
import styled from 'styled-components';

const PostsContainerDiv = styled.div `
    width: 70%;
    margin: 0 auto;
`

const PostsContainer = props => {

    // Each PostContainer component will then pass the array of 
    // comments on each post object as a prop to an instance of the CommentSection component.
    return (
        <PostsContainerDiv>
        {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
        </PostsContainerDiv>
    )
}

export default PostsContainer;