import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(x => <PostContainer data={x}/>)}
      </div>
    );
  }
}

export default App;
