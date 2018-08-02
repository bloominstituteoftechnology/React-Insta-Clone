import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/Authentication/Autheticate';
import PostPage from './components/PostContainer/PostPage';
import {Container} from 'reactstrap';

class App extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <Container>
          <PostPage />
      </Container>
    );
  }
}

export default Authenticate(App);
