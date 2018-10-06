import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {dummyData}
    }
  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer userpost={this.state.data.dummyData} 
        a/> 
      </div>
    );
  }
}

export default App;
