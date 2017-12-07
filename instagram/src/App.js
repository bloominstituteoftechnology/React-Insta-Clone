import React, { Component } from 'react';
// import dummyData from './dummy-data';
import postData from './application-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer key={'2'} postData={postData} />
      </div>
    );
  }
}

export default App;
