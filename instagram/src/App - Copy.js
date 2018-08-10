import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostsContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import Authenticate from "./components/Authenticate/Authenticate";

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: dummyData};
     
    };
 


  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ username: user });
  }

  // componentDidMount() {
  //   this.setState({ posts: dummyData });
  // }

  // postHandler = event => {
  //   const posts = this.state.posts.filter(post => {
  //     if (post.username.includes(event.target.value)) {
  //       return post;
  //     }
  //   });

  //   this.setState({ filteredPosts: posts });
  // };

  render() {
    return (
      <div className="App">
      {/* <SearchBar findPost={this.postHandler}/> */}
      < SearchBar />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

 export default App;
