import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './SearchBar'
import Comments from './Comments'
import PostContainer from './PostContainer'


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData
    }
  }
  
  render() {
    return (
      <div className="App">
      <SearchBar/>
      <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
