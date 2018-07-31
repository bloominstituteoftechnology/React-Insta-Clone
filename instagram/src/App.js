import React, { Component } from 'react';
import './App.css';
import Search from './components/SearchBar/Search.js';
import PostList from './components/PostContainer/PostList.js';
import DummyData from '../src/dummy-data.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dummydata: [],
      searchString: ''
    }
  }

  componentDidMount(){
    this.setState({
      dummydata : DummyData
    })
  }

  handleLike = (t) => {
    let dummy = this.state.dummydata.slice();
    let index = dummy.findIndex((el)=>{
      return el.timestamp === t;
    });
    let post = dummy[index];
    post.likes = post.likes + 1;
    dummy[index] = post;
    this.setState({
      dummydata: dummy
    })
  }

  handleSearchString = (e) => {
    e.preventDefault();
    this.setState({
      searchString: e.target.value
    })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    let dummy = this.state.dummydata.slice();
    let username = this.state.searchString.toLowerCase();
    console.log("username", username);
    
    let results = dummy.filter((el)=>{
      return el.username === username;
    })
    console.log("results", results);
    this.setState({
      dummydata: results
    })
  }

  render() {
    return (
      <div className="App">
        <Search handleSearchString={this.handleSearchString} handleSearchSubmit={this.handleSearchSubmit}/>
        <PostList postData={this.state.dummydata} className="post-list-container" handleLike={this.handleLike}/>
      </div>
    );
  }
}

export default App;
