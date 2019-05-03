import React, { Component } from 'react';
import withAuthenticate from './components/Authentication/withAuthenticate';
import './App.css';

import PostPage from './components/PostContainer/PostPage';

class App extends Component {
  constructor() {
    super();
    this.state = {}
    
  }
  

  
  
  render () {
    const ComponentFromWithinAuthenticate = withAuthenticate(PostPage)
    return (
      <div className="App">
        <ComponentFromWithinAuthenticate />
      </div>
    )
  }
}


export default App;