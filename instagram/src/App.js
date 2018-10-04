import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './components/dummy-data';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instaData: [props.dummyData]
    }
  }



  render() {
    return (
      <>
      <SearchBar />
      <PostContainer instaData={this.state.instaData} dummyData={dummyData} />
      
      
      </>
    );
  }
}

export default App;
