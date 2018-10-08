import React, { Component } from 'react';
import dummyData from './dummy-data.js'
import PostContainer from './components/PostContainer/postContainer.js'
import SearchBar from './components/SearchBar/searchBar.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {/* <PostContainer data={this.state.dummyData.map(data => {
          return data;
        })} /> */}
        <PostContainer data={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
