import React from 'react';
import Post from './Post'; 
import styled from 'styled-components';

const PostContainerWrapper = styled.div`
  margin: 0 auto; 
`; 

const PostContainer = props => {
  return (
    <PostContainerWrapper>
        {props.posts.map((post) => (
            <Post post={post} commentName={props.usernameLogin} />
        ))}
    </PostContainerWrapper>
  );
};

export default PostContainer; 

