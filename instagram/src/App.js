import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Post: dummyData
    };
  }

  // componentDidMount() {
  //   this.setState({Post: dummyData});
  // }

render() {
  return (
     <div className="App">
      <SearchBar />
       <PostContainer dummyData={this.state.Post} />
      </div>
    );
  }
}

export default App;
