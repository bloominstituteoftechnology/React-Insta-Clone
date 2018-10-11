import React, { Component } from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PostsPage from './components/PostContainer/PostsPage';

import Authenticate from './components/Authenticate/Authenticate';

class App extends Component {
  constructor(){
    super();
    this.state={}
  };


 
  render() {
    return (
      <div className="App">
      <PostsPage />
        
      </div>
    );
  }
}

export default Authenticate(App);
