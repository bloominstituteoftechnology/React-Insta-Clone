import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <header className="searchheader">
          <SearchBar />
        </header>
        
        <PostContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
