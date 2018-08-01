import React, { Component } from 'react';
import PostsPage from "./components/PostComponents/MainPostsPage";

class App extends Component {
  constructor() {
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

export default App;
