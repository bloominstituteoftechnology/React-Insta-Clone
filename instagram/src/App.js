import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data';
import './App.css';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostWrapper from './components/PostWrapper/PostWrapper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummydata: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
        {this.state.dummydata.map(dummy => <PostWrapper key={dummy.username} data={dummy}/>)}
      </div>
    );
  }
}

export default App;
