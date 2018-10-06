import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchInput: ''
    }
  };

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  };

  //track changes in search input

  typeInSearch = (e) => {
    this.setState({
      searchInput: e.target.value
    }, console.log(this.state.searchInput))
  }

  //submit changes to search input

  submitSearch = (e) => {
    e.preventDefault();
    let posts = this.state.posts.slice();
    posts = posts.filter(post => post.username === this.state.searchInput);
    this.setState({
      posts: posts
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          value={this.state.searchInput}
          onChange={this.typeInSearch}
          onSubmit={this.submitSearch}
        />
        <div className='PostsContainer'>
          {this.state.posts.map(post => {
            return (
              <PostContainer 
                key={Math.random()} 
                postInfo={post}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
