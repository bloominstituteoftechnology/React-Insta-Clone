import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor (){
    super();
    this.state={
      posts: dummyData
    };
  }

  render() {
    // console.log(this.state.posts);
    return (
      <div className="App">{
        this.state.posts.map( postObject => {
          return <PostContainer key={postObject.username} postObject={postObject} />
        })
      }</div>
    );
  }
}

export default App;
