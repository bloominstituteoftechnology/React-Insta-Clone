import React from 'react';

import Post from './Post';
import styled from 'styled-components';

const PostsContainerWrapper = styled.div`
    width: 50%;
    height: 500px;
    margin: 5px auto;
`;

const PostContainer = props => {
    return ( 
        <PostsContainerWrapper>
            {props.posts.map(post => 
                <Post 
                key={post.timestamp} 
                post={post} 
                />
                )}
        </PostsContainerWrapper>
    );
}

export default PostContainer;