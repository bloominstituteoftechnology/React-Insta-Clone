import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostsContainer = styled.section`
    height: 500px;
    width: 50%;
    margin: 5px auto;
`;


const PostContainer = props => {
    return (
        <PostsContainer>
        {props.posts.map(post => <Post key={post.username} post={post} />)}    
        </PostsContainer>
    );
}

export default PostContainer;