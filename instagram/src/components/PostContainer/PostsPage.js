import React, { Component } from 'react';
import './PostsPage.css';
import dummyData from "./dummy-data";
import MainHeader from "../SearchBar/MainHeader";
import PostContainer from "./PostContainer";

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


class PostsPage extends Component {
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
      <div className="posts-page">
        <MainHeader />
        <div className = "posts">
        <PostContainer posts = {this.state.posts} />
        </div>
      </div>
    );
  }
}

export default PostsPage;
