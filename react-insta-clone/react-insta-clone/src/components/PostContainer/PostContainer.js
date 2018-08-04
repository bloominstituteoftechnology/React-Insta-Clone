import React from 'react';
import './PostContainer.css';
import Post from './Post';
import { StyledPostContainer } from "../styled-components/styled-components";

const PostContainer = props => {
    // console.log('containerProps', props.posts);
    return (
        <StyledPostContainer>
            {props.posts.map(p =>
            <Post key={p.imageUrl} post={p} />
            )}
        </StyledPostContainer>
    );
};

export default PostContainer;