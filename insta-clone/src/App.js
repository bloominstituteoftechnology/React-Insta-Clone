import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';



class App extends Component {
  render() {

    return (
      <>
        <div className="SearchBar">
          <SearchBar />
        </div>
        <div className="PostContainer">
          <PostContainer dummyData={dummyData} />
        </div>
     </>
    );
  }
}

export default App;
