import React, { Component } from 'react';
import './App.css';
import './components/PostContainer/PostContainer.css';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    };
  }




  render() {
    return (
      <div className="App">
       Instagram
       <SearchBar />
       <PostContainer 
          dummyData= {this.state.dummyData}
        />
      </div>
    );
  }
}

export default App;
