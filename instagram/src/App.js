import React, { Component } from 'react';
import './App.css';
import SearchBar from "./Component/SearchBar/search-bar";
import Post from "./Component/PostContainer/Post";


import dummyData from './dummy-data'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  render() {
    return (
      <div>

        <SearchBar />
        <Post data={this.state.data} />
      </div>
    )
  }
}

export default App;
