import React from 'react';
import Post from './Post';
import styled from 'styled-components';

const PostContainerUl = styled.ul`
  padding: 40px 0;
`;

const PostContainer = (props) => {
  return(
    <PostContainerUl>
      {props.searchData.map((post) => {
        return <Post key={`${Math.random()}${post.originalIndex}`} postData={post} addNewComment={props.addNewComment} addLike={props.addLike} postIndex={post.originalIndex} />
      })}
    </PostContainerUl>
  );
};

export default PostContainer;