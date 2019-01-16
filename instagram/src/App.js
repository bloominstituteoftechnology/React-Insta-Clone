import React, { Component } from 'react';
import update from  'immutability-helper';

import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import PostContainer from './components/PostComponents/PostContainer.js';

import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: "Instagram User",
      posts: [],
      commentInputs: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: JSON.parse(localStorage.getItem("posts")) || dummyData,
      commentInputs: Array(dummyData.length).fill("")
    }, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  toggleHeart(e) {
    const postIndex = posts.findIndex(post => post._id === e.currentTarget.dataset._id);
    const likeIndex = posts[postIndex].likes.findIndex(liker => liker === this.state.currentUser);

    const posts =  update(this.state.posts, {
                            [postIndex]: {
                              likes: likeIndex === -1 ? 
                                      { $push: [this.state.currentUser] } : 
                                      { $splice: [[likeIndex, 1]]}
                            }
                          });
      
    this.setState({posts}, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  handleClick = e => {
    switch (e.currentTarget.name) {
      case "heart-btn" :
        this.toggleHeart(e);
        break;
      
      case "comment-btn" :
        this.focusToCommentForm(e);
        break;
    }
  };

  handleChange = e => {
    switch (e.currentTarget.name) {
      case "commentInput" :
        const postIndex = this.state.posts.findIndex(post => post._id === e.currentTarget.dataset._id);
    
        const commentInputs = update(this.state.commentInputs, {
                                      [postIndex]: { $set: e.currentTarget.value }
                                     });  

        this.setState({commentInputs});
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
          commentInputs={this.state.commentInputs}
          handleClick={this.handleClick}
          handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
