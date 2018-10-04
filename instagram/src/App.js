import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      dummyData: dummyData,
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(item => {
          return(
            <PostContainer post={item} /> 
          )}) 
        }
        <CommentSection />
      </div>
    );
  }
}

export default App;
