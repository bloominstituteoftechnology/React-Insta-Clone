import React, { Component } from 'react';
import styled from "styled-components";
import Post from './Post.js'

const PostsContainer = styled.div`
  width: 100%;
`;


const PostContainer = props => {
    return (
        <PostsContainer>
            {props.posts.map(post => (
                <Post
                    post={post}
                    key={post.timestamp}
                />
                
            ))}
        </PostsContainer>);
}

export default PostContainer;