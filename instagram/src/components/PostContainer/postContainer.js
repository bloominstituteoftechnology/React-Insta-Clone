import React from 'react';
import './PostContainer.css';
import Post from './Post';

import styled from 'styled-components';

const PostContainerWrapper = styled.div`
  height: 500px;
  width: 50%;
  margin: 5px auto;
`

const PostContainer = props => {
  return (
    <PostContainerWrapper>
  
      {props.posts.map(item => <Post key={item.imageUrl} post={item} />

      )}
      

    </PostContainerWrapper>
   );
};
 
export default PostContainer;