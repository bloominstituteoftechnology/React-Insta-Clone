import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostsContainerWrapper = styled.div`
    width: 50%;
    height: 500px;
    margin: 5px auto;
`;

const PostsContainer = props => {
    return (
            <PostsContainerWrapper>
                {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
            </PostsContainerWrapper>
    );
};

export default PostsContainer;
