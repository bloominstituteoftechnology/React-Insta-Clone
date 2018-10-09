import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './dummyData';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {dummyData};  
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(items =>
        <div>
        <PostContainer content = {items} />
        <CommentSection content = {items} />
        </div>)}
      </div>
    );
  }
}

export default App;
