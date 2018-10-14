import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostStream from './components/PostStream/PostStream.js';
import SearchHeader from './components/SearchHeader/SearchHeader.js';
import SearchBarForm from './components/SearchHeader/SearchBarForm.js';

  class App extends Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        filteredPosts: []
      };
    }

  componentDidMount() {
    this.setState({ posts: dummyData });
    this.setState({ filteredPosts: dummyData });
   }

  searchPostsHandler = e => {
     const postArray = this.state.posts.filter(p => {
         if (p.username.includes(e.target.value)) {
            return true 
         } else {
           return false 
         }
         });
         this.setState({ filteredPosts: postArray });
       };



  render() {
    //console.log(this.state.filteredPosts)
    return (
      
      <div className="App">
      App
      
        <SearchHeader searchPosts={this.searchPostsHandler}/>
        <PostStream filteredPosts={this.state.filteredPosts} posts={this.state.posts} ></PostStream>
       
      </div>
    );
  }
}

export default App;


/*

<SearchBarForm searchTerm={this.searchTerm} searchPosts={this.searchPostsHandler}></SearchBarForm>
*/