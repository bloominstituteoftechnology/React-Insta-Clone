import React from 'react';
import Post from './Post';
import styled from 'styled-components';
import './Post.css';


const PostWrapper = styled.div`
    margin-left: 8%;
`;

const PostContainer = (props)=> {
    return (
        <PostWrapper>
           {props.post.map(post=> <Post key={post.imageUrl} post={post} />)}
        </PostWrapper>
    );
};

export default PostContainer;