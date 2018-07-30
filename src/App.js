import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './Components/SearchComponents/SearchBar';
import PostContainer from './Components/PostComponents/PostContainer';

class App extends Component {
  constructor(){
      super();
      this.state = {
        posts: [],
      }
  }

  componentDidMount(){
    this.setState({posts: dummyData});
  }

  render() {
    return (
      <div className="app-container">
        <SearchBar />
        {this.state.posts.map(post => <PostContainer post={post} />)}
      </div>
    );
  }
}

export default App;
