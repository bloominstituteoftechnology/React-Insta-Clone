import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage';
import authenticateHOC from './components/Authentication/Authenticate';


class App extends Component {
  constructor(){
    super();
    this.state = {}
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
