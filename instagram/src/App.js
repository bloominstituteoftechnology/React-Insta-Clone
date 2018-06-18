import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchContainer from './components/SearchBar/SearchContainer';
import PostContainer from './components/PostContainer/PostContainer';
class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchContainer />
        {this.state.instaData.map((data,i) => {
          return <PostContainer key = {i} data={data} />
        })
        }
      </div>
    );
  }
}

export default App;
