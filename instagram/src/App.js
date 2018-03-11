import React, { Component } from 'react';
import logo from './logo.svg';
import { SearchBar } from './components/SearchBar/SearchBar';
import './App.css';
import { PostList } from './components/PostContainer/posts';
import { Comments } from './components/CommentSection/CommentSection';

import { dummyData } from './dummy-data';



class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: []
        };
  }
  componentDidMount() {
    this.setState({Posts: dummyData});
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Instagram</h1>

        <div id = "search">
        <SearchBar  />
         </div>
        </header>
        <PostList dummyData={this.state.Posts} />

      </div>
    );
  }
}

export default App;
