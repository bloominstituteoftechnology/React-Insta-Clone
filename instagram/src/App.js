import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';


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
        <h1>Instagram</h1>
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />                                                                      
      </div>
    );
  }
}

export default App;
