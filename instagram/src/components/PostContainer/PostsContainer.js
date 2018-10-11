import React from 'react';
import Post from './Post';

import styled from 'styled-components';

const PostContainer = styled.div`
    height: 500px;
    width: 50%;
    margin: 0 auto;
    `;

const PostsContainer = props => {
    return (
        <PostContainer>
            {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
        </PostContainer>
    );
}

export default PostsContainer;