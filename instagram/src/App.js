import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostsPage/PostsPage';
import authenticate from './components/Authentication/Authenticate';
import { EventEmitter } from './events.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      commentInput: '',
      searchInput: ''
    }
    EventEmitter.subscribe('commentChange', (event) => this.commentChange(event))
    EventEmitter.subscribe('addComment', (event) => this.addComment(event))
    EventEmitter.subscribe('likePost', (event) => this.likePost(event))
    EventEmitter.subscribe('searchChange', (event) => this.searchChange(event))
  }

  componentDidMount() {
    this.setState({data: dummyData});
  }
  
  searchChange = event => {
    this.setState({
      searchInput: event.target.value
    })
  }

  commentChange = event => {
    this.setState({
      commentInput: event.target.value
    })
  }

  addComment = event => {
    event.preventDefault();
    const copyState = this.state.data.map((post, i) => {
      if (event.target.id === i.toString() && this.state.commentInput.trim()) {
        post.comments.push({username: localStorage.getItem('username'), text: this.state.commentInput});
        return post;
      } else {
        return post;
      }
    })  
    this.setState({
      data: copyState,
      commentInput: ''
    })
  }

  likePost = event => {
    this.setState({
      data: this.state.data.map((post, i) => {
        if (event.target.id === i.toString()) {
          Object.assign(post, { liked: !post.liked });
          post.liked ? Object.assign(post, {likes: post.likes+1}) : Object.assign(post, {likes: post.likes-1})
          return post;
        } else {
          return post;
        }
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <PostsPage 
          data={this.state.data}
          commentInput={this.state.commentInput}
          searchInput={this.state.searchInput}
        />
      </div>
    );
  }
}

export default authenticate(App);
