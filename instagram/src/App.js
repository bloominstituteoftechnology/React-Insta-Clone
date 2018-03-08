import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    this.setState({ users: dummyData });
  }

  render() {
    return (
      <div>
        <PostContainer users={this.state.users} />
        <CommentSection users={this.state.users} />
      </div>
    );
  }
}

export default App;
