import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({ data: [...dummyData] }); //adding dummydata to data array
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"
          alt="logo"
        />
        <div className="posts-container-wrapper">
          {this.state.data.map((post) => <PostContainer key={post.username} post={post} />)}
        </div>
      </div>
    );
  }
}

export default App;
//mapping state before we pass it
// passing down each post as 'post' to the post container
