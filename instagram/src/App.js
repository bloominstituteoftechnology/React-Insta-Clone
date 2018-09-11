import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer postsProps={this.state.data}/>
      </div>
    );
  }
}

export default App;
