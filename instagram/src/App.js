import React, { Component } from 'react';
import styled from 'styled-components';
import Authenticate from './components/Authentication/Autheticate';
import PostPage from './components/PostContainer/PostPage';

const Container = styled.div`
  max-width: 1200px;
  border: 1px solid lightgray;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
          <PostPage />
      </Container>
    );
  }
}

export default Authenticate(App);
