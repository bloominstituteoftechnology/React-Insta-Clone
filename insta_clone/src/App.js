import React, { Component } from 'react';
import Login from './components/Login/Login';
import styled from 'styled-components';

import withAuthenticate from './components/Authentication/withAuthenticate';
import PostsPage from './components/Postpage/PostsPage';
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage, Login);
class App extends Component {
  render() {
    return (
      <AppContainer>
        <ComponentFromWithAuthenticate />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 100%;
`;

export default App;
