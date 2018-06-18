import React, { Component } from 'react';
import uuid from 'uuid/v1';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData,
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.dummyData.map(d => {
          return <PostContainer key={uuid()} data={d} />;
        })}
      </div>
    );
  }
}

export default App;
