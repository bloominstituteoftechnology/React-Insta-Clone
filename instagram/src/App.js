import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
// import commentData from './components/CommentSection/commentData';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';



class App extends Component {
  constructor (){
    super();
    this.state ={
      dummyData: dummyData
      // commentData: commentData
    }
  }
    render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <SearchBar />
       <PostContainer posts={this.state.dummyData} />
       <CommentSection comment={this.state.commentData} />
      </div>
    );
  }
}

export default App;
