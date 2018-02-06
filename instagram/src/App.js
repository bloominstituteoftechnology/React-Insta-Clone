import React, { Component } from 'react';
import './App.css';
import { dummyData } from '/Users/e144574/Desktop/Camila Programming/LAMBDA/CS 6/week4/React-II/instagram/src/dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer post={this.state.data}/>
      </div>
    );
  }
}

export default App;
