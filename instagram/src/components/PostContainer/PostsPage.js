import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import PostContainer from './PostContainer.js';
import styled from 'styled-components';

const PostPage = styled.div``;

const PostsPage = props =>{
  return(
    <PostPage>
        <PostContainer posts = {props.data} />
    </PostPage>
  );
}

export default PostsPage;
