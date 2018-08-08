import React, { Component } from "react";
// import PropTypes from "prop-types";
import dummyData from "../dummy-data";
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
// import Authenticate from './Authentication/Authentication';


console.log(dummyData);

// const Authenticate = Authenticate(App);


class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: props.comments,
      

    };
  }


  componentDidMount(){
    console.log("CDM was invoked");
    // this.setState();

    this.setState({posts: dummyData});
  }

  commentHandler () {
    //have state be for the comments 
  }


  // searchPo

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts} />
        {/* <Authenticate /> */}
      </div>
    );
  }
}

export default PostsPage;
