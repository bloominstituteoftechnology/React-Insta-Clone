import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'; 
import SearchBar from './components/SearchBar/SearchBar.js'; 
import PostContainer from './components/PostContainer/PostContainer.js'; 
import CommentSection from './components/CommentSection/CommentSection.js'; 


class App extends Component {
  constructor(){
    super();
    this.state = {dummyData: [], cmdCalled: false, commentPlaceHolder: "Add a comment..."}
  }

  componentDidMount () {
    this.setState({dummyData:dummyData, cmdCalled: true});
  }

  render() {
    let dummyData; 
    this.state.cmdCalled ? dummyData = this.state.dummyData : dummyData = []
    return (
      <div className="App">
        
        {dummyData.map((post, i) => <div key = {i} className = "post">
        <SearchBar  key={Date.now()}/> <hr className ="hrLine"/> <div className = "containerPost">
        <PostContainer key = {Date.now()} userName = {post.username} thumbNail={post.thumbnailUrl} image={post.imageUrl}
        likes = {post.likes}/> 
        <CommentSection key ={i} comments = {post.comments} time = {post.timestamp} placeHolder = {this.state.commentPlaceHolder}/> 
        </div> </div>)}

        
        
        
      </div>
    );
    
  }
}

export default App;
