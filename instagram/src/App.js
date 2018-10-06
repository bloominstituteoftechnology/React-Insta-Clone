import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data'

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
}

componentDidMount() {
  this.setState({data: dummyData})
}

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer dummyData={this.state.data} />
      </div>
    );
  }
}

export default App;
