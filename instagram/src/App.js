import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';
// import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
    constructor() {
      super();
        this.state = {
       dummyData: dummyData  
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Confusion</h1>
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />                                                                      
      </div>
    );
  }
}

export default App;
