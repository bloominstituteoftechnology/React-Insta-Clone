import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostContainer from './components/PostContainer/PostContainer';

const data = dummyData;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
    }
  }
  render() {
    
    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer 
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
