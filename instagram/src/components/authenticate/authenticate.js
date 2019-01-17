import React, { Component } from 'react';
import update from  'immutability-helper';

import Fuse from 'fuse.js';

import dummyData from '../../dummy-data.js';

const authenticate = App => LoginContainer => class extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: "",
      currentUser: "",
      posts: [],
      postQueryResults: [],
      postQueryInput: "",
      commentInputs: [],
    }
  }

  componentDidMount() {
    const posts = JSON.parse(localStorage.getItem("posts")) || dummyData;
    this.setState({
      usernameInput: "",
      passwordInput: "",
      currentUser: JSON.parse(localStorage.getItem("currentUser")) || "",
      posts: [...posts],
      postQueryResults: [...posts],
      postQueryInput: "",
      commentInputs: Array(dummyData.length).fill("")
    }, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  generateId() {
    return `${Date.now()}${Math.floor(Math.random() * 100000000)}`;
  }

  loginUser() {
    this.setState({
      currentUser: this.state.usernameInput
    }, () => localStorage.setItem("currentUser", JSON.stringify(this.state.currentUser)));
  }

  searchPosts(postQueryInput) {
    const postQueryResults = postQueryInput ?
                              [...new Fuse(this.state.posts, {
                                shouldSort: false,
                                threshold: 0.1,
                                minMatchCharLength: 1,
                                keys: [
                                  "username"
                                ]
                              }).search(postQueryInput)] :
                              [...this.state.posts];
    this.setState({
      postQueryResults,
      postQueryInput,
      commentInputs: Array(postQueryResults.length).fill("")
    });
  }

  togglePostHeart(e) {
    const postIndex = this.state.posts.findIndex(post => post._id === e.currentTarget.dataset._id);
    const postQueryResultsIndex = this.state.postQueryResults.findIndex(post => post._id === e.currentTarget.dataset._id);
    const likeIndex = this.state.posts[postIndex].likes.findIndex(liker => liker === this.state.currentUser);

    const posts =  update(this.state.posts, {
                            [postIndex]: {
                              likes: likeIndex === -1 ? 
                                      { $push: [this.state.currentUser] } : 
                                      { $splice: [[likeIndex, 1]]}
                            }
                          });
    const postQueryResults =  update(this.state.postQueryResults, {
                                [postQueryResultsIndex]: {
                                  likes: likeIndex === -1 ? 
                                          { $push: [this.state.currentUser] } : 
                                          { $splice: [[likeIndex, 1]]}
                                }
                              });
      
    this.setState({
      posts,
      postQueryResults
    }, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  toggleCommentHeart(e) {
    const postIndex = this.state.posts.findIndex(post => post._id === e.currentTarget.dataset.post_id);
    const postCommentIndex = this.state.posts[postIndex].comments.findIndex(comment => comment._id === e.currentTarget.dataset.comment_id);
    const postLikeIndex = this.state.posts[postIndex].comments[postCommentIndex].likes.findIndex(liker => liker === this.state.currentUser);

    const postQueryResultsIndex = this.state.postQueryResults.findIndex(post => post._id === e.currentTarget.dataset.post_id);
    const postQueryResultsCommentIndex = this.state.postQueryResults[postQueryResultsIndex].comments.findIndex(comment => comment._id === e.currentTarget.dataset.comment_id);
    const postQueryResultsLikeIndex = this.state.postQueryResults[postQueryResultsIndex].comments[postQueryResultsCommentIndex].likes.findIndex(liker => liker === this.state.currentUser);

    const posts = update(this.state.posts, {
                            [postIndex]: {
                              comments: {
                                [postCommentIndex] : {
                                  likes: postLikeIndex === -1 ?
                                          { $push: [this.state.currentUser] } :
                                          { $splice: [[postLikeIndex, 1]] } 
                                }
                              }
                            }
                          });
    const postQueryResults = update(this.state.postQueryResults, {
                                      [postQueryResultsIndex]: {
                                        comments: {
                                          [postQueryResultsCommentIndex] : {
                                            likes: postQueryResultsLikeIndex === -1 ?
                                                      { $push: [this.state.currentUser] } :
                                                      { $splice: [[postQueryResultsLikeIndex, 1]] } 
                                          }
                                        }
                                      }
                                    });

    this.setState({
      posts,
      postQueryResults
    }, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  deleteComment(e) {
    const postIndex = this.state.posts.findIndex(post => post._id === e.currentTarget.dataset.post_id);
    const postCommentIndex = this.state.posts[postIndex].comments.findIndex(comment => comment._id === e.currentTarget.dataset.comment_id);

    const postQueryResultsIndex = this.state.postQueryResults.findIndex(post => post._id === e.currentTarget.dataset.post_id);
    const postQueryResultsCommentIndex = this.state.postQueryResults[postQueryResultsIndex].comments.findIndex(comment => comment._id === e.currentTarget.dataset.comment_id);

    const posts = update(this.state.posts, {
                            [postIndex]: {
                              comments: { $splice: [[postCommentIndex, 1]] }
                            }
                          });
    const postQueryResults = update(this.state.postQueryResults, {
                                      [postQueryResultsIndex]: {
                                        comments: { $splice: [[postQueryResultsCommentIndex, 1]] }
                                      }
                                    });

    this.setState({
      posts,
      postQueryResults
    }, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  addNewComment(_id, newCommentText) {
    const new_id = this.generateId();

    const postIndex = this.state.posts.findIndex(post => post._id === _id);
    const postQueryResultsIndex = this.state.postQueryResults.findIndex(post => post._id === _id);

    const posts = update(this.state.posts, {
                            [postIndex]: {
                              comments: { $push: [{
                                _id: new_id,
                                username: this.state.currentUser,
                                text: newCommentText,
                                likes: []
                              }] }
                            }
                          })
    const postQueryResults = update(this.state.postQueryResults, {
                          [postQueryResultsIndex]: {
                            comments: { $push: [{
                              _id: new_id,
                              username: this.state.currentUser,
                              text: newCommentText,
                              likes: []
                            }] }
                          }
                          })

    this.setState({
      posts,
      postQueryResults
    }, () => localStorage.setItem("posts", JSON.stringify(this.state.posts)));
  }

  handleChange = e => {
    switch (e.currentTarget.name) {
      case "usernameInput" :
      case "passwordInput" :
        this.setState({
          [e.currentTarget.name] : e.currentTarget.value
        });
        break;

      case "postQueryInput" :
        this.searchPosts(e.currentTarget.value);
        break;

      case "comment-input" :
        const postIndex = this.state.postQueryResults.findIndex(post => post._id === e.currentTarget.dataset._id);
        const commentInputs = update(this.state.commentInputs, {
                                        [postIndex]: { $set: e.currentTarget.value }
                                      });  

        this.setState({commentInputs});
        break;
    }
  };

  handleSubmit = e => {
    switch(e.currentTarget.name) {
      case "login-form" :
        this.loginUser();
        break;
    }
  }

  handleClick = e => {
    switch (e.currentTarget.name || e.currentTarget.dataset.name) {
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

  handleKeyDown = e => {
    if ((e.keyCode || e.which) === 13 && !e.shiftKey) {
      e.preventDefault();
      switch(e.currentTarget.name) {
        case "comment-input" :
          const newCommentText = e.currentTarget.value;

          const postIndex = this.state.postQueryResults.findIndex(post => post._id === e.currentTarget.dataset._id);
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
    return this.state.currentUser ?
      <App
        currentUser={this.state.currentUser}
        posts={this.state.posts}
        postQueryResults={this.state.postQueryResults}
        postQueryInput={this.state.postQueryInput}
        commentInputs={this.state.commentInputs}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleKeyDown={this.handleKeyDown} /> :
      <LoginContainer
        usernameInput={this.state.usernameInput}
        passwordInput={this.state.passwordInput}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />;
  }
};

export default authenticate;