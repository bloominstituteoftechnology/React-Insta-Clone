import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData
    }

  }


  render() {
    return (
      <div className="container">
        <header >
          <SearchBar  />
        </header>

       {this.state.dummyData.map(dummyData => <PostContainer key={dummyData.timestamp} dummyData={dummyData}/>)}
  
      </div>
    );
  }
}

export default App;
