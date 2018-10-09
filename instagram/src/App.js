import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostList/PostList'

import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchText: '',
      currentUser: ''
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
      currentUser: 'BobBelcher'
    });
  }

  addCommentHandler = timestamp => {
    // event.preventDefault();
    // method adds a comment to selected post
    // gets current post
    console.log('handle comment');
    // gets comment - have to add an input field onClick
    let newComment = 'this is a new comment';

    // adds username and comment to the post
    const updatedComments = [...this.state.posts.map(post => {
      if (post.timestamp === timestamp) {
        const addComment = {
          username: this.state.currentUser,
          text: newComment
        }
        return { ...post, comments: [...post.comments, addComment] };
      } else {
        return post;
      }
    })]
    this.setState({
      posts: updatedComments
    })
  }

  addLikeHandler = timestamp => {
    // method adds a like to selected post
    // gets current post
    console.log('handle like - ' + timestamp);

    // adds a like to current likes
    const updatedLikes = [...this.state.posts.map(post => {
      if(post.timestamp === timestamp) {
        post.likes += 1;
        return post
      }
      else {
        return post;
      }
    })]
    this.setState({
      posts: updatedLikes
    })
}


  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostList posts={this.state.posts} addCommentHandler={this.addCommentHandler} addLikeHandler={this.addLikeHandler} />
      </div>
    );
  }
}

export default App;
