import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import CommentSection from './components/CommentSection/CommentSection.js';
import { dummyData } from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      feed: [],
    }
  }

  componentDidMount(){
    this.setState({feed: dummyData});
  }

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <PostContainer feed={this.state.feed}/>
      </div>
    );
  }
}

export default App;
