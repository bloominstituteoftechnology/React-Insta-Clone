import React from 'react';
import Post from './Post';
import './PostContainer.css';
import styled from 'styled-components';

const PostWrap = styled.div`
    height: 50%;
    width: 45%;
    min-width: 300px;
    margin: 5px auto;
`;


const PostContainer = props => {
    return (
        <PostWrap>
            {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
        </PostWrap>
    );
};

export default PostContainer;