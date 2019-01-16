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

  generateId() {
    return `${Date.now()}${Math.floor(Math.random() * 100000000)}`;
  }

  togglePostHeart(e) {
    const postIndex = this.state.posts.findIndex(post => post._id === e.currentTarget.dataset._id);
    const likeIndex = this.state.posts[postIndex].likes.findIndex(liker => liker === this.state.currentUser);

    const posts =  update(this.state.posts, {
                            [postIndex]: {
                              likes: likeIndex === -1 ? 
                                      { $push: [this.state.currentUser] } : 
                                      { $splice: [[likeIndex, 1]]}
                            }
                          });
      
    this.setState({posts}, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  toggleCommentHeart(e) {
    const postIndex = this.state.posts.findIndex(post => post._id === e.currentTarget.dataset.post_id);
    const commentIndex = this.state.posts[postIndex].comments.findIndex(comment => comment._id === e.currentTarget.dataset.comment_id);
    const likeIndex = this.state.posts[postIndex].comments[commentIndex].likes.findIndex(liker => liker === this.state.currentUser);

    const posts = update(this.state.posts, {
                           [postIndex]: {
                             comments: {
                               [commentIndex] : {
                                 likes: likeIndex === -1 ?
                                          { $push: [this.state.currentUser] } :
                                          { $splice: [[likeIndex, 1]] } 
                               }
                             }
                           }
                         });

    this.setState({posts}, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  deleteComment(e) {
    const postIndex = this.state.posts.findIndex(post => post._id === e.currentTarget.dataset.post_id);
    const commentIndex = this.state.posts[postIndex].comments.findIndex(comment => comment._id === e.currentTarget.comment_id);

    const posts = update(this.setState.post, {
                           [postIndex]: {
                             comments: { $splice: [[commentIndex, 1]] }
                           }
                         });

    this.setState({posts}, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  addNewComment(_id, newCommentText) {
    const postIndex = this.state.posts.findIndex(post => post._id === _id);

    const posts = update(this.state.posts, {
                           [postIndex]: {
                             comments: { $push: [{
                               _id: this.generateId(),
                               username: this.state.currentUser,
                               text: newCommentText,
                               likes: []
                             }] }
                           }
                         })

    this.setState({posts}, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  handleClick = e => {
    switch (e.currentTarget.name) {
      case "heart-post-btn" :
        this.togglePostHeart(e);
        break;
      
      case "comment-btn" :
        this.focusToCommentForm(e);
        break;

      case "heart-comment-btn" :
        this.toggleCommentHeart(e);
        break;

      case "delete-comment-btn" :
        this.deleteComment(e)
        break;
    }
  };

  handleChange = e => {
    switch (e.currentTarget.name) {
      case "comment-input" :
        const postIndex = this.state.posts.findIndex(post => post._id === e.currentTarget.dataset._id);
        const commentInputs = update(this.state.commentInputs, {
                                       [postIndex]: { $set: e.currentTarget.value }
                                     });  

        this.setState({commentInputs});

        break;
    }
  };

  handleKeyDown = e => {
    if ((e.keyCode || e.which) === 13 && !e.shiftKey) {
      e.preventDefault();
      switch(e.currentTarget.name) {
        case "comment-input" :
          const newCommentText = e.currentTarget.value;

          const postIndex = this.state.posts.findIndex(post => post._id === e.currentTarget.dataset._id);
          const commentInputs = update(this.state.commentInputs, {
                                         [postIndex]: { $set: "" }
                                       });  

          this.setState({commentInputs});

          this.addNewComment(e.currentTarget.dataset._id, newCommentText);
          break;
      }
    }
  }

  render() {
    return (
      <div className="ig-clone">
        <HeaderContainer />
        <PostContainer 
          currentUser={this.state.currentUser}
          posts={this.state.posts}
          commentInputs={this.state.commentInputs}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          handleKeyDown={this.handleKeyDown} />
      </div>
    );
  }
}

export default App;
