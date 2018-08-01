import React, { Component } from 'react';
import './App.css';
import dummyData from "./dummy-data";
import MainHeader from "./components/SearchBar/MainHeader";
import PostContainer from "./components/PostContainer/PostContainer";

// Outline:

//App
    //Main Header
        //Page Title
        //Search Field
        //Header Icons
    //Post Container
        //Header
            //Avatar
            //Post Title
        //Image
        //Comment Section
            //Post Icons
            //Loaded Comments
            //Add Comment


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    this.setState({posts: dummyData});
  }
  
  render() {
    return (
      <div className="App">
        <MainHeader />
        <div className = "Posts">
        <PostContainer posts = {this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
