import React from 'react';
import Post from './Post';
import './Posts.css';
import styled from 'styled-components';

const PostsContainerWrapper = styled.div`
  height: 500px;
  width: 50%;
  margin: 5px auto;
  margin-top: 100px;
`;

const PostsContainer = props => {
  return (
    <PostsContainerWrapper>
      {props.posts.filter(post => {
        return post.username.includes(props.searchTerm);
      }).map(p => <Post key={p.imageUrl} post={p} />)}
    </PostsContainerWrapper>
  );
};

export default PostsContainer;
