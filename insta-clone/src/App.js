import React, { Component } from 'react';
import dummyData from './dummy-data'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {data: dummyData};
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <PostContainer posts={this.state.data} />
      </div>
    );
    }
}

export default App;
