import React, { Component } from 'react';
import './App.css';

import CommentSection from './components/CommentSection/commentsection'
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/postcontainer'
import SearchBar from './components/SearchBar/searchbar'


class App extends Component {
  constructor(){
    super();
    this.state ={ dummyData };
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map((items, i) => 
          <div key = {i}>
            <PostContainer content= {items} />
            <CommentSection content= {items} />
          </div>)}
      </div>
    );
  }
}

export default App;
