import React, { Component } from 'react';
import './App.css';
//components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection'

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
      <PostContainer />
      <CommentSection />
      </div>
    );
  }
}


//itterate over dummy data pass each object as a prop to instance of comment HTMLTableSectionElement
//post container will pass array of comments on each post as a prop to comment sections
//comment section will render a comment component with username, there should also be a input box that allows submmission of new comments
//use proptypes to check the type of data



export default App;
