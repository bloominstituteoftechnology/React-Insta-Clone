import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './Components/SearchComponents/SearchBar';
import PostContainer from './Components/PostComponents/PostContainer';

class App extends Component {
  constructor(){
      super();
      this.state = {
        posts: [],
        filteredPosts: undefined,
      }
  }

  componentDidMount(){
    this.setState({posts: dummyData});
  }

  handleFilter = event => {
    let searchValue = event.target.value;
    if(searchValue !== '')
    {
      let newFilteredPosts = this.state.posts.filter(post => post.username.includes(searchValue));
      this.setState({
        filteredPosts: newFilteredPosts,
      });
    }else {
      this.setState({
        filteredPosts: undefined,
      })
    }
  }

  render() {
    return (
      <div className="app-container">
        <SearchBar filter={this.handleFilter} />
        {this.state.filteredPosts === undefined ?
          this.state.posts.map(post => <PostContainer post={post} />) :
          this.state.filteredPosts.map(post => <PostContainer post={post} />)}
      </div>
    );
  }
}

export default App;
