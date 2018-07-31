import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <SearchBar />
        </header>
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

//dummyData.map(post => <post )

export default App;
