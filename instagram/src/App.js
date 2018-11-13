import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostContainer/PostList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,

      inputComment: 'Add a comment...',
      usersComments: dummyData.map(userPost => {
        return {username: userPost.username, currentUserCommentInput: ''}
      }),

    };
  }

  handleChange = event => {
    const userPosts = this.state.usersComments.map(userPost => {
      if(userPost.username === event.target.name) {
        return {username: userPost.username, currentUserCommentInput: event.target.value}
      } else {
        return {username: userPost.username, currentUserCommentInput: ''}
      }
    });

    this.setState({
      inputComment: event.target.value,
      usersComments: [...userPosts]
    });
  };

  handleAddComment = (event, username) => {
    event.preventDefault();

   console.log(this.state.usersComments, this.state.inputComment);

    let currentPost = this.state.posts.map(post => {
      if(post.username === username){
        return (

          {username: post.username,
          thumbnailUrl: post.thumbnailUrl,
          imageUrl: post.imageUrl,
          likes: post.likes,
          timestamp: post.timestamp,
          comments: [...post.comments, {username: 'SpyGirl', text: this.state.inputComment}]}
            
          ); 
      } else {
        return post;
      }

    });

    let clear = this.state.usersComments.map(userPost => {
      return {username: userPost.username, currentUserCommentInput: ''}
    });

   console.log(clear);
   
    this.setState({
        posts: [...currentPost],
        usersComments: [...clear],
        inputComment: ''
    });

    // let firstPost = this.state.posts[0];
    // let newComments = firstPost.comments;
    // newComments = [...this.state.posts[0].comments, {username: 'SpyGirl', text: this.state.inputComment}]; 
    

    // firstPost.comments = newComments;
  
    // this.setState({
    //   posts: [firstPost, this.state.posts[1], this.state.posts[2]],
    //   inputComment: 'Add a comment...'
    // });
    
  };

  render() {
    return (
      <div className="App">
        <SearchBar  />
        <PostList postData={this.state.posts} inputComment={this.state.usersComments} handleAddComment={this.handleAddComment} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;


