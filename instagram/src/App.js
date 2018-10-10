import React, { Component } from 'react';
import SearchBar from './components/SearchBar/search-bar'
import PostContainer from './components/PostContainer/post-container'
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
     const posts - this.state.posts.filter(p => {
       if(p.username.includes(event.target.calue)) {
         return p;
       }
     });
     this.setState({ filteredPosts: posts});
   }
  render() {
    return (
      
      <div className="App">
        
        <div className ='searchBarInput'>
        <SearchBar />
      </div>
      <div className = 'mainContent'>
        <PostContainer />
        
      </div>
    </div>
    );
  }
}
 export default App;