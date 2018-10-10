import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';




class App extends Component {
  constructor() {
    super();
    this.state = {
      posts : [],

      filteredPosts : [],

      comm : ''
    };

  } //constructor ends

  componentDidMount() {
   // console.log('CDM is running', this.state.posts);
    
    setTimeout(() => {
      this.setState({ posts : dummyData });
    }, 800);
  }

  //Create a function in app.js called addNewComment that takes in an event and an index number. 
  //The function will add the comment that is on the event object to the post that is at that index number.
  addNewComment = (event, index) => {
    console.log(event.target);
    console.log(event.target.value);
    event.preventDefault();
    const newComment = { text: this.state.posts.comments, username: 'ryanhamblin' };
    const comments = this.state.posts.comments.slice();
    comments.push( {
        text : this.state.posts.comments.text
        
    });
    this.setState({comments, comm : ''});
  };

  commentHandler = (event) => {
    this.setState ({ [event.target.name] : event.target.value});
  };

  searchPostsHandler = event => {
    console.log(event.target);
    console.log("In SEARCH .... ", event.target.value);
    const posts = this.state.posts.filter(postToSearch => {
      if (postToSearch.username.includes(event.target.value)) {
          return postToSearch;
      }
    });
    this.setState({ filteredPosts : posts });
  };
              
  render() {
   // console.log(this.state.posts);
    return (
      <div className="App">
        <header className = "header-div">
            <SearchBar 
                searchTerm = {this.state.searchTerm}
                searchPosts = {this.searchPostsHandler}
            />
        </header>

        <div> 
            <PostContainer 
                postPassedAhead = {
                    this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts
          }/>
        </div>
      </div>
    ); //return end
  } //render() end
} //App class component end.

export default App;
