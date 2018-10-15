import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData}/>
        <CommentSection />
      </div>
    );
  }
}

export default App;
