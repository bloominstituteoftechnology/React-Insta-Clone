import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      validated: [],
    };
  }

  render () {
    return (
      <div>
        <Authenticate App={<App/>}/>
        <PostsPage />
      </div>
    )
  }

}


export default App;
