import React, { Component } from 'react';
import styled from "styled-components"
import './App.css';
import './components/PostContainer/PostContainer.css';
import './components/CommentSection/CommentSection.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authentication'

 const AppWrapper = styled.div`
  display: flex;
  max-width: 640px;
  margin: 0 auto;
  flex-wrap: wrap;
`;


const App = () => {

  return (
    <AppWrapper>
      <PostsPage/>
    </AppWrapper>
  );
}

export default Authenticate(App);
