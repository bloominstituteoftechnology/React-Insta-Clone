import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authenticate'
import styled from 'styled-components'
const MainWrapper = styled.div`
  max-width: 880px;
  width:80%;
  margin: 0 20px 0 20px;
`
class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <MainWrapper>
        <PostsPage />
        </MainWrapper>
      );
  }
}

export default Authenticate(App);
