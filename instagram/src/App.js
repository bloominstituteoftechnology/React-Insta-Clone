import React, { Component } from 'react';
import dummyData from './dummy-data' 

import './App.css'

import SearchContainer from './components/SearchBar/SearchContainer'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: dummyData,
      searchTerm: '',
      comment: ''
    }
  }

  addComment(postID){
    
  }
  render() {
    return (
      <div className='container'>
          <SearchContainer />
          <PostContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
