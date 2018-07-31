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
    this.state = {dummyData: [], cmdCalled: false, searchText: ""}
  }

  componentDidMount () {
    this.setState({dummyData:dummyData, cmdCalled: true});
  }

  handleSearchChange = event => {
    this.setState({searchText: event.target.value});
    console.log(this.state.searchText);
  }
  

  render() {
    let dummyData; 
    this.state.cmdCalled ? dummyData = this.state.dummyData : dummyData = []
    console.log(this.handleSearchChange)
    return (
      <div className="App">
        <SearchBar  value ={this.state.searchText} onChange = {this.handleSearchChange}/>
        {dummyData.map((post, i) => <div key = {i} className = "post">
        <hr className ="hrLine"/> <div className = "containerPost">
        <PostContainer key = {Date.now()} userName = {post.username} thumbNail={post.thumbnailUrl} image={post.imageUrl}
        likes = {post.likes}/> 
        <CommentSection key ={i} comments = {post.comments} time = {post.timestamp}/> 
        </div></div>) }

        
        
        
      </div>
    );
    
  }
}

export default App;
