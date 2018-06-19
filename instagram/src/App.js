import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchContainer from './components/SearchBar/SearchContainer';
import PostList from './components/PostContainer/PostList';
class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
      username: '',
      comment: '',
    };
  }
  changeComment = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  addComment = (e) => {
  }
  render() {
    return (
      <div className="App">
        <SearchContainer />
        <PostList instaData = {this.state.instaData}/>
      </div>
    );
  }
}

export default App;
