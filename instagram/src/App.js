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
   }

  searchPostsHandler = e => {
     const postArray = []
     this.state.posts.filter(p => {
         if (p.username===e.target.value) {
            return postArray.push(p)
         }
        return this.setState({ filteredPosts: postArray});
         });
       };


  render() {
    console.log(this.state.filteredPosts)
    return (
      
      <div className="App">
      App
      <SearchBarForm  searchTerm={this.searchTerm}
        searchPosts={this.searchPostsHandler}></SearchBarForm>
        <SearchHeader/>
        <PostStream filteredPosts={this.state.filteredPosts}></PostStream>
       
      </div>
    );
  }
}

export default App;


/*

import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer'
import Authenticate from './components/Authentication/Authenticate'
import './App.css';


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
  }
  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };
  login (username) {
    setItem()	
    //find syntax for adding item to localstorage

  }

  render() {
    return (
      <div className="App">
        <SearchBar
    searchTerm={this.state.searchTerm}  
    searchPosts={this.searchPostsHandler}
    />
       <PostsPage></PostsPage>
      </div>
    );
  }
}

export default  Authenticate(App);








/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData,
  }
  };

  render() {

  return (
   <div>
     <PostContainer dummyData={this.state.dummyData}></PostContainer>
   </div>
      );
   }
  }

export default App;
*/