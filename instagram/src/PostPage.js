import React, { Component } from "react";
import dummyData from './dummy-data'
import SearchBar from './SearchBar'
import PostContainer from "./PostContainer";
 class PostsPage extends Component {
    constructor() {
      super();
      this.state = {
        data: [],
        names: ""
      };
    }
    componentDidMount(){
      this.setState({data: dummyData}); 
    }
    render() {
      return (
          <div className="background">
           <SearchBar />
          <div className="app-container">
          <PostContainer 
          handleLikeBtn = {this.likeBtn}
          posts={this.state.data} />
        </div>
        </div>
      );
    }
  }
  export default PostsPage; 