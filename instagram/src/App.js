import React, { Component } from 'react';
import Posts from './components/PostContainerComponents/Posts';
import Authentication from './components/AuthenticationComponent/Authentication';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
  text-align: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
`;


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <AppContainer>
        <Posts />
      </AppContainer>
    );
  }
}

export default Authentication(App);
