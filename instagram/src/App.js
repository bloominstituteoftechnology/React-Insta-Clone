import React, { Component } from 'react';
import SearchBarContainer from './components/Search/SearchBarContainer';
import PostContainer from './components/Post/PostContainer';
import CommentsContainer from './components/Comments/CommentsContainer';
import './App.css';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dummyData });
    }, 1000);
  }

  render() {
    // console.log(this.state);
    if (!this.state.dummyData) {
      return <div>Loading Data...</div>;
    }

    return (
      <div className="App">
        <SearchBarContainer />
        <PostContainer data={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
