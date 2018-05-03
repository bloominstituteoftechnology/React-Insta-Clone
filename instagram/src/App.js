//Start
import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';



class App extends Component {

  constructor() {
    super();
    this.state = {
       dummyData: []
    }
  }

  componentDidMount() {
    this.setState({ dummyData });

  }

  render() {
    return (
      <div className="App">
      {this.state.dummyData.map((post) => 
        { return( <PostContainer post={post} />) }
      )}
      <SearchBar />
      </div>
    );
  }
}

export default App;