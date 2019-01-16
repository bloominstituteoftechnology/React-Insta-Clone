import React, { Component } from 'react';

import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import PostContainer from './components/PostComponents/PostContainer.js';

import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: "Instagram User",
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: JSON.parse(localStorage.getItem("posts")) || dummyData
    }, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  toggleHeart(e) {
    const posts = this.state.posts;

    const postIndex = posts.findIndex(post => post._id === e.currentTarget.dataset._id);
    const likeIndex = posts[postIndex].likes.findIndex(liker => liker === this.state.currentUser);

    if (likeIndex === -1) {
      posts[postIndex].likes.push(this.state.currentUser);
    } else {
      posts[postIndex].likes.splice(likeIndex, 1);
    }

    this.setState({posts});
  }

  handleClick = e => {
    switch (e.currentTarget.name) {
      case "heart-btn" :
        this.toggleHeart(e);
        break;
    }
  };

  render() {
    return (
      <div className="ig-clone">
        <HeaderContainer />
        <PostContainer 
          currentUser={this.state.currentUser}
          posts={this.state.posts}
          handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
