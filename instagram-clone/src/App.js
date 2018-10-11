import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/postpage';
import Authenticate from './components/Authentication/authenticate';
import styled from 'styled-components';

const AppContainer = styled.div`
  background: white;
`

class App extends Component {
  constructor(){
    super();
    this.state = {}
  };

  render() {
   return (
     <AppContainer className="App">
      <PostPage onLogout={this.props.onLogout}/>
     </AppContainer>     
   )
  }
}

export default Authenticate(App);

// App.js