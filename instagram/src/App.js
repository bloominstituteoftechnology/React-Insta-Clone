import React from 'react';
import './App.css';
import {StyledApp} from './components/Styles/Styles';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authenticate/Authenticate';

document.body.classList.add('background-snow');

class App extends React.Component {
  constructor() {
    super();   
    this.state= { 
    };
  }


  render() {
    return (
      <StyledApp>
      
      <PostPage 
      />

      </StyledApp>
    );
  }
}


export default Authenticate(App);
