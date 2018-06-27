import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

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
        <SearchBar />
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
