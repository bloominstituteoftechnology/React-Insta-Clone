import React, { Component } from 'react';
import Fuse from 'fuse.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import dummyData from './dummy-data'
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

library.add(far, fab);

class App extends Component {
  constructor(){
    super();
    this.state = {data: [], searchValue: '', shownPosts: [] };
  }

  componentDidMount = () => {
    this.setState({data: dummyData, shownPosts: dummyData});
  }

  searchInput = (event) => {
    //this.setState({searchValue: event.target.value});
    let searchTerm = event.target.value;
    this.setState((prevState) => {
      return ({ shownPosts: prevState.data.filter(post => post.username.indexOf(searchTerm) !== -1)})
    });
    // let options = {
    //   keys: ['username']
    // };
    // let fuse = new Fuse(this.state.data, options);
    // this.setState((prevState) => {
    //   return ({ shownPosts: fuse.search(searchTerm)});
    // })
    // console.log(fuse.search(searchTerm));
  }

  render() {
    return (
      <div className="container">
        <SearchBar onSearch={this.searchInput} />
        <PostContainer posts={this.state.shownPosts} currentUser={'Bobby123'} />
      </div>
    );
    }
}

export default App;
