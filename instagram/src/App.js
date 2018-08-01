import React, { Component } from 'react';
import dummyData from './dummy-data';

import './App.css';
import PostsPage from './PostPage' 
import Authenticate from './authentication';


class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }
  
 

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
