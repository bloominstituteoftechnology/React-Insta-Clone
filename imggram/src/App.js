import React, { Component } from 'react';
import './App.css';
import postData from './application-data.js';
import Header from './header.js';
import Post from './post.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
    }
  }


  componentDidMount() {
    this.setState({post: postData});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Post
          posts={this.state.post}
        />
      </div>
    );
  }
}

export default App;
