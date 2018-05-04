import React, { Component } from 'react';
import './App.css';

import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myData: []
    }
  }

  componentDidMount() {
    this.setState({ myData: dummyData });
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        {this.state.myData.map((post, index) => <PostContainer key={index} post={post} />)}

      </div>

    );
  }
}

export default App;
