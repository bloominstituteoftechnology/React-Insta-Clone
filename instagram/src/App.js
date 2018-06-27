import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostsContainer/PostsContainer';



class App extends Component {
  constructor(){
    // will be called first
    super();
    this.state={
      posts: dummyData
    };
  }//constructor

  componetDidMount(){
    //will be called third
    // window.localStorage.setItem("comments", JSON.stringify(dummyData));
    this.setState({ posts:dummyData }); 
  }

  render() {
    // will be called second
    // will be called after setState
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
          posts={this.state.posts}
        />
        
      </div>
    );
  }//render
}//App

export default App;
