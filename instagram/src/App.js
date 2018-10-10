import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer'
import Authenticate from './components/Authentication/Authenticate'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
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
    return (
      <div className="App">
        <SearchBar
    searchTerm={this.state.searchTerm}  
    searchPosts={this.searchPostsHandler}
    />
       <PostsPage></PostsPage>
      </div>
    );
  }
}

export default App;








/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData,
  }
  };

  render() {

  return (
   <div>
     <PostContainer dummyData={this.state.dummyData}></PostContainer>
   </div>
      );
   }
  }

export default App;
*/