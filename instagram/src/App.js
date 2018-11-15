import React, { Component } from 'react';

import PostPage from './components/PostContainer/PostPage';
import authenticateHOC from './components/Authentication/Authenticate';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }  


  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
    
  }
}

export default authenticateHOC(App);
