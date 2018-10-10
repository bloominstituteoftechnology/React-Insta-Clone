import React, { Component } from 'react';
import SearchBar from './components/SearchBar/search-bar'
import PostsContainer from './components/PostContainer/post-container'
import './App.css';
import dummyData from './dummyData'
//import CommentSection from './components/CommentSection/comment-section';

 class App extends Component {
   constructor (props) {
     super(props);
     this.state = {
       posts : [],
      filteredPosts: []
     };
   }
  
   componentDidMount () {
     this.setState ({posts: dummyData});
   }

   searchPostsHandler = event => {
     const posts = this.state.posts.filter(p => {
       if(p.username.includes(event.target.value)) {
         return p;
       }
     });
     this.setState({ filteredPosts: posts});
   }
  render() {
    return (

      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}
 export default App;