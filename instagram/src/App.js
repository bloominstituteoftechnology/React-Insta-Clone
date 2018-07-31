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

  render() {
    return (
      <div className="App">
        <Search className="search-bar"/>
        <PostList postData={this.state.dummydata} className="post-list-container" handleLike={this.handleLike}/>
      </div>
    );
  }
}

export default App;
