import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data'
import './App.css';

class App extends Component {

  state = {
    dummyData: dummyData,
}


  render() {
    return (
      <div className="App">
      <SearchBar />
      {this.state.dummyData.map(obj   =>  {
            return  <PostContainer dummyData={obj}/>
        })}
      </div>
    );
  }
}

export default App;
