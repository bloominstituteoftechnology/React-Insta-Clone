import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'

import './App.css';
import dummyData from './dummy-data';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      posts: null
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  handleSearch (event) {
    event.preventDefault();
    if (this.state.searchInput !== '') {
      let searchStr = this.state.searchInput;
      let searchRx = new RegExp(searchStr, "i");
      let posts = this.state.posts.slice(0,);
      posts = posts.map((post) => {
        let visibility = false;
        if (searchRx.test(post.username)) {
          visibility = true;
        }
        let returnObj = {visible: visibility};
        return Object.assign(post, returnObj);
      });
      this.setState({
        posts: posts,
        searchInput: ''
      })
    }
  }

  handleSearchInputChange(event) {
    let text = event.target.value;
    this.setState({
      searchInput: text
    }, this.handleSearch());
  }

  filterPostsforVisibility(arr) {
    let filteredArr = arr.filter((post) => {
      return post.visible;
    });
    return filteredArr;
  }

  render() {
    let postElems = null;
    if (this.state.posts) {
      let posts = this.filterPostsforVisibility(this.state.posts);
      posts = posts.map((post) => {
        return (
          <PostContainer key={post.thumbnailUrl} post={post} />
        );
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar searchInput={this.state.searchInput} handleSearchInputChange={this.handleSearchInputChange} handleSearch={this.handleSearch} />
        </header>
        {postElems}
      </div>
    );
  }
}

export default App;
