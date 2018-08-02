import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import Authenticate from "./components/Authentication/Authenticate";


const App = Authenticate(
  class App extends Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        filteredPosts: []
      }
    }

    componentDidMount() {
      this.setState({
        posts: dummyData
      });
    }

    filterPosts = event => {
      const posts = this.state.posts.filter(post => {
        if (post.username.includes(event.target.value)) {
          return post;
        }
      });
      this.setState({ filteredPosts: posts });
    }

    logout = () => {
      localStorage.removeItem("username");
      window.location.reload();
    } 

    render() {
      return (
        <div className="App">
          <div>
            <SearchBar filterPostsHandler={this.filterPosts} logoutHandler={this.logout} /> 
          </div>
          <div>
            {this.state.filteredPosts.length > 0 ? this.state.filteredPosts.map(post => (
            <PostContainer key={post.timestamp} post={post} addLikeHandler={this.addLike} />
            ) ) : this.state.posts.map(post => (
              <PostContainer key={post.timestamp} post={post} addLikeHandler={this.addLike} />
              ) )  } 
          </div>
        </div>
      );
    }
  })



export default App;
