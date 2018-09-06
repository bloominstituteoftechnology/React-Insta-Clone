import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import styled from 'styled-components';

class App extends Component {

  render() {
    return (
      <Container>
        <PostsPage />
      </Container>
      
    );
  }
}

const Container = styled.div`
  
`;

export default Authenticate(App);
