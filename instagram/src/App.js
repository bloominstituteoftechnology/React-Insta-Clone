import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage.js';
import Authenticate from './components/Authentication/Authenticate.js';

const TestComponent = Authenticate(PostsPage);

class App extends Component {

  render() {
    return (
      <div className="App">
        <TestComponent />
      </div>
    );
  }
}

export default App;
