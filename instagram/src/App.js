import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import postData from './application-data.js'
import PostList from './PostList.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      arrPosts:[]
    }
  }

  componentDidMount() {
    this.setState({arrPosts: postData});
  }

  render() {
    return (
      <div>
        <h1> Instagram </h1>
        <div class = "App__searchbox"> <input type = "text"/> <button> search </button> </div>
          <PostList postName = {this.state.arrPosts} />
      </div>
    );
  }
}

export default App;
