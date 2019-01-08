import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default App;
