import React from "react";

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import dummyData from "./dummy-data";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instaData: [],
      username: ""
    };
  }

  componentDidMount() {
    // let lsUsername = localStorage.getItem('username');
    // if (lsUsername === 'Frank') {
    //   this.setState({instaData: dummyData, loggedIn: true})
    // }

    this.setState({ instaData: dummyData });
  }
  render() {
    return (
      <div className="App">
        <SearchBar instagramData={this.state.instaData} />
        <PostContainer comments={this.state.instaData} />
      </div>
    );
  }
}

export default PostsPage;
