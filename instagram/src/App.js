import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostsContainer/PostsContainer';



class App extends Component {
  constructor() {
    // will be called first
    super();
    this.state={
      posts: [],
      filteredPosts:[]
    };
  }//constructor

  componetDidMount(){
    //will be called third
    // window.localStorage.setItem("comments", JSON.stringify(dummyData));
    this.setState({ posts:dummyData }); 
  }

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    // will be called second
    // will be called after setState
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
            }
        />
        
      </div>
    );
  }//render
}//App

export default App;
