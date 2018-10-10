import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './components/authentication/authenticate'

class App extends Component {
  constructor() {
    super();
    // this.state = {
    //   posts: [],
    //   filteredPosts: [],
    //   isLoggedIn : false,
    // };
  }
  login = ()=>{
    // set a username on local storage
    // force update the page
  }
  // componentDidMount() {
  //   this.setState({ posts: dummyData });
  // }
  // searchPostsHandler = e => {
  //   const posts = this.state.posts.filter(p => {
  //     if (p.username.includes(e.target.value)) {
  //       return p;
  //     }
  //   });
  //   this.setState({ filteredPosts: posts });
  // };
  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
