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
       dummyData: []
     };
   }
  
   componentDidMount () {
     this.setState ({dummyData: dummyData});
   }

  render() {
    return (
      
      <div className="App">
        
        <div className ='searchBarInput'>
        <SearchBar />
      </div>
      <div className = 'mainContent'>
        <PostContainer />
        <CommentSection />
      </div>
    </div>
    );
  }
}
 export default App;