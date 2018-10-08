import React, { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'




class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      postData: dummyData,
    }
  }










  render() {
    return (
      <div className="App">
          <SearchBar />
          {this.state.postData.map(item => {
             return  <PostContainer postItems={item} key={item.timestamp} />
          })}
          
      </div>
    );
  }
}

export default App;
