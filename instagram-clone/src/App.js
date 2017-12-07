import React, { Component } from 'react';
import './App.css';
// import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
// import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        {/* {dummyData.map((data, index) => <PostContainer key={index} data={data} />)} */}
      </div>
    );
  }
}

export default App;
