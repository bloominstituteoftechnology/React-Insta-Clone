import React, { Component } from 'react';
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
          return <PostContainer key={Math.random()} data={d} />;
        })}
      </div>
    );
  }
}

export default App;
