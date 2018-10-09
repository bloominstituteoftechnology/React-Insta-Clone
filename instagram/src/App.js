import React, { Component } from 'react';
import Authenticate from "./components/Authentication/Authenticate";
import PostPage from"./components/PostContainer/PostPage";
import './App.css';

class App extends Component {
 render() {
    return(
      <PostPage/>
    );
  }
}

export default Authenticate(App);
