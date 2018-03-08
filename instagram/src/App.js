import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    this.setState({users: dummyData})
  }
  
  render() {
  return (
      <PostContainer users={this.state.users} />
      
    );
  }
}

export default App;
